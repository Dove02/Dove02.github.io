# 智能绘图

::: tip 技术选型
- 任意大模型
- echarts 图表库
- Vue3
:::


## 构造 prompt

构造 prompt，让 AI 严格返回图表 JSON，示例如下：

```js
// content 是用户的问题参数
`你是一个数据可视化助手。请基于下方“用户查询”，产出可直接用于 ECharts 的完整 JSON 配置。
用户查询: "${content}"

规则：
1) 只返回一个 JSON 对象，不要任何额外文字/注释/代码块。
2) JSON 字段尽量完整，优先包含：
   - title: { text }
   - tooltip: 对于 line/bar 使用 { trigger: "axis" }；pie/scatter 用 { trigger: "item" }
   - legend: { bottom: 5, right: 5 }
   - grid: { containLabel: true }
   - toolbox: { feature: { saveAsImage: {} } }
   - color: 字符串数组，如 ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]
   - dataset(可选): { source: ... }
   - visualMap(可选)
   - xAxis/yAxis: 依据图表类型设置；pie 通常不需要 xAxis/yAxis
   - series: 数组，元素需包含 type、name 和 data
   - desc: 对图表结论或洞察的简短中文描述
   - type: "line" | "bar" | "pie" | "scatter"
3) 数据约定：
   - line/bar: 提供 xAxis.data:["类目1", ...]，series[i].data 为数字数组
   - pie: series:[{ type:"pie", radius:"50%", data:[{ name:"名称", value:数值 }] }]
   - scatter: series:[{ type:"scatter", data:[[x,y], [x,y], ...] }]
4) 数值为数字，不要字符串数字。
5) 若查询未给出具体数据，请合理生成 4-8 个点的模拟数据。

输出为上述结构的 JSON。`
```


## 渲染图表

1. 创建图表容器：
    - 当回答内容为图表 JSON 时显示
    - 通过 `ref` 将容器绑定到 `chartRefs`，方便后续获取
    ```vue
    <template>
      <div
        v-for="(item, index) in dialogueList"
        :key="item.id || index"
      >
        <div v-show="isJsonChart(item.content)">
          <div
            :ref="(el) => (chartRefs[item.id] = el)"
            style="width: 350px; height: 300px"
          ></div>
        </div>
      </div>
    <template>
    
    <script>
    const dialogueList = ref([]);
    const chartRefs = ref({});

    const isJsonChart = (str) => {
      try {
        const obj = JSON.parse(str);
        return obj && obj.series;
      } catch {
        return false;
      }
    }
    </script>
    ```

2. 在回答输出结束后，调用渲染方法，渲染图表。

    渲染方法如下：
    ```js
    import * as echarts from 'echarts';

    // 存储多个实例
    const chartInstances = ref({});

    const renderChart = (content, id) => {
      // 1.解析 JSON
      let chartOption;

      try {
        chartOption = typeof content === "string" ? JSON.parse(content) : content;
      } catch (err) {
        console.error("解析图表 JSON 失败:", err);
        return;
      }

      nextTick(() => {
        // 2.初始化 echarts
        const el = chartRefs.value[id];
        if (!el) return;

        let myChart = chartInstances.value[id];
        if (!myChart) {
          myChart = echarts.init(el);
          chartInstances.value[id] = myChart;
        }

        // 3.透传回答返回的完整配置，并做最小化补全
        const option = { ...chartOption };
        option.title = option.title || {};
        if (typeof option.title === "string") option.title = { text: option.title };
        option.tooltip = option.tooltip || {
          trigger:
            option.type === "pie" || option.type === "scatter" ? "item" : "axis",
        };
        option.legend = option.legend || { top: "top" };
        if (option.type !== "pie") {
          option.grid = option.grid || { containLabel: true };
        }

        if (Array.isArray(option.series)) {
          option.series = option.series.map((s) => ({
            type: s.type || option.type,
            name: s.name,
            data: s.data,
            ...(s.radius ? { radius: s.radius } : {}),
          }));
        }
        if ((option.type === "line" || option.type === "bar") && !option.xAxis) {
          option.xAxis = { type: "category", data: [] };
        }
        if ((option.type === "line" || option.type === "bar") && !option.yAxis) {
          option.yAxis = { type: "value" };
        }

        // 4.渲染图表
        myChart.setOption(option, true);
      });
    }
    ```