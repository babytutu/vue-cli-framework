# 基于vue-cli的开发环境

## 基本命令

### 安装依赖包
```
npm i
```

### 本地开发模式
```
npm run start
```

### 编译生产环境代码
```
npm run build
```

### 代码校验和自动修复错误
```
npm run lint
```

## 插件说明

| 名称 | 描述 | 参考资料 |
| --- | --- | --- |
| axios | http请求工具 | [GitHub](https://github.com/axios/axios) |
| echarts | 精简版图表（线性/柱状/饼） | [GitHub](https://github.com/apache/incubator-echarts) [WebSite](http://echarts.baidu.com/) |
| element-ui | 饿了么样式组件库 | [GitHub](https://github.com/ElemeFE/element) [WebSite](http://element-cn.eleme.io/#/zh-CN/component/installation) |

### 挂载vue原型链的方法

```js
Vue.prototype.$axios = _axios
Vue.prototype.$echarts = echarts
```

### axios

```js
this.$axios.get(url).then(res => {
  this.res = res
})
```

### echarts

```js
// 基于准备好的dom，初始化echarts实例
let bar = this.$echarts.init(document.getElementById('bar'))
// 绘制图表
bar.setOption(this.echarts.line.option)
```

### 插入static文件夹下文件[使用相对public的路径]

```html
<img alt="logo" src="/static/images/logo.png" />
```

## 目录结构

```
├── public               // 非打包文件目录
│   ├── static           // 静态资源目录
│   ├── favicon.ico      // 网站图标
│   └── index.html       // html模版
├── src                  // 前端代码目录
│   ├── components       // 组件目录
│   ├── plugins          // 插件目录
│   ├── router           // 路由目录
│   ├── utils            // 模块目录
│   ├── views            // 页面目录
│   ├── App.vue          // 前端模版入口
│   └── main.js          // webpack入口
├── .editorconfig        // 编辑器配置
├── .eslintrc.js         // eslint配置
├── .gitignore           // git忽略文件
├── .npmrc               // npm配置, 指向淘宝服务器
├── babel.config.js      // babel配置
├── package.json         // node工程配置
├── README.md            // 读我吧~
└── vue.config.js        // vue-cli配置
```

## 参考文档
[vue官方文档](https://cn.vuejs.org/v2/guide/)
[vue-cli配置](https://cli.vuejs.org/config/)

