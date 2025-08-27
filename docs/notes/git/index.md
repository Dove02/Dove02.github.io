---
prev: 
  text: 'Vue'
  link: '/notes/vue'

next: false
---


# Git


## 连接 GitHub 报错

### 问题描述

本地 pull/push 推送代码到 github 项目报 22 端口连接超时，测试连接也是 22 端口连接超时

::: info 问题
ssh connect to host github.com port 22 Connection timed out
:::


### 解决方案 

将端口切换为 443

1. 先测试连接：
```shell
ssh -T git@github.com
```

报错：
```
ssh: connect to host github.com port 22: Connection timed out
```

2. 测试 443 端口：
```shell
ssh -T -p 443 git@ssh.github.com
```

成功提示：
```
Hi 你的用户名! You've successfully authenticated, but GitHub does not provide shell access.
```

3. 如果 443 端口连接成功，修改 SSH 的 config 配置文件（没有就新建）

::: info 路径
C:\Users\\\<username>\\.ssh
:::

配置：
```shell
Host github.com
  Hostname ssh.github.com
  Port 443
```

4. 再次测试连接：
```shell
ssh -T git@github.com
```

成功提示：
```
Hi 你的用户名! You've successfully authenticated, but GitHub does not provide shell access.
```