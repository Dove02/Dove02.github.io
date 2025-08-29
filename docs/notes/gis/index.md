---
next: false
---


# GIS

`GIS`（`Geographic Information System`）是用于采集、存储、管理、分析和可视化地理空间数据的系统。


## 相关概念

::: details 基础概念
|术语|解释|
|---|---|
|WebGIS|基于 Web 的 GIS 系统，通过浏览器访问 GIS 功能，实现地图展示、查询和分析|
|空间数据|描述地理对象位置的数据，包括点、线、面|
|属性数据|描述地理对象特征的数据，如人口、土地类型、道路等级|
|矢量数据（Vector）|用点、线、面表示地理对象，适合表示离散对象|
|栅格数据（Raster）|用像素网格表示地理空间信息，适合连续数据，如遥感影像和高程数据|
|地图投影（Projection）|将地球曲面转换为平面地图的数学方法|
|坐标系统（Coordinate System）|确定地理对象位置的参考系统，包括地理坐标系（经纬度）和投影坐标系|
:::

::: details WebGIS 相关术语
|术语|解释|
|---|---|
|瓦片地图（Tile Map）|将地图切成小块图像（瓦片），按需加载，提高性能|
|图层（Layer）|按类别组织和显示的空间数据集合，例如道路图层、建筑物图层|
|MVT（Mapbox Vector Tile）|矢量瓦片格式（.pbf），传输几何和属性数据，前端动态渲染|
|DEM（Digital Elevation Model）|数字高程模型，表示地形起伏|
:::


## 前端常见地图框架

|框架|介绍|
|---|---|
|[Leaflet](https://leafletjs.cn/)|轻量、快速搭建、开源|
|[Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js)|视觉效果丰富、支持矢量/3D，本身是开源的，但一般依赖于Mapbox公司提供的底图服务|
|[ArcGIS Maps SDK for JS](https://developers.arcgis.com/javascript/latest/)|学术场景下较为常用，不开源且费用较高|
|[OpenLayers](https://openlayers.org/)|开源，相比于 Leaflet 更加复杂和完备|
|[Cesium](https://cesium.com/)|三维地理可视化的常用库，在大尺度的可视化（地形、建筑、地球）中十分常用|
|[百度地图JS API GL](https://lbsyun.baidu.com/index.php?title=jspopularGL)|百度地图开放平台提供的 API|
|[高德地图JS API 2.0](https://lbs.amap.com/api/javascript-api-v2/summary)|高德开放平台提供的 API|
|[Google Maps JS API](https://developers.google.com/maps/documentation/javascript?hl=zh-cn)|谷歌地图提供的 API，在境外有更好的数据|
|[AntV L7](https://l7.antv.antgroup.com/)|蚂蚁集团开发的空间数据可视化库|