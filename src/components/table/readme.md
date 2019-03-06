# table-model

## Props

|名称|类型|默认值|描述|
|---|---|---|---|
|formData|Object|-|分页信息|
|list|Array|[]|表格数据|
|header|Array|[]|表头|

formData
|名称|类型|默认值|描述|
|---|---|---|---|
|total|Number|-|总页数|
|current|Number|1|当前页数|
|pagesize|Number|10|每页条数|

header
|名称|类型|默认值|描述|
|---|---|---|---|
|label|String|-|列名称|
|key|String|-|列对应key值|

## Slots
|名称|描述|
|---|---|
|||

Demo
```js
{
  "formData": {
    "total": 100,
    "current": 1,
    "pagesize": 30
  },
  "list": [
    {
      "name": "axios",
      "desc": "http请求工具",
      "version": "0.18.0",
      "website": "https://github.com/axios/axios",
      "github": "https://github.com/axios/axios"
    },
    {
      "name": "echarts",
      "desc": "精简版图表（线性/柱状/饼）",
      "version": "4.2.0-rc.2",
      "website": "http://echarts.baidu.com/",
      "github": "https://github.com/apache/incubator-echarts"
    },
    {
      "name": "element-ui",
      "desc": "饿了么样式组件库",
      "version": "2.4.5",
      "website": "http://element-cn.eleme.io/#/zh-CN/component/installation",
      "github": "https://github.com/ElemeFE/element"
    },
    {
      "name": "牛牛截图",
      "desc": "截图插件简单封装",
      "version": "1.0.0.0",
      "website": "http://www.ggniu.cn",
      "github": ""
    },
    {
      "name": "vue-aplayer",
      "desc": "音频播放简单封装",
      "version": "5.8.0",
      "website": "https://vue-aplayer.js.org",
      "github": "https://github.com/SevenOutman/vue-aplayer"
    }
  ],
  "header": [
    {
      "label": "名称",
      "key": "name"
    },
    {
      "label": "版本",
      "key": "version"
    },
    {
      "label": "介绍",
      "key": "desc"
    }
  ]
}
```