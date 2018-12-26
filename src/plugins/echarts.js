import Vue from 'vue'

// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts')
// 引入线性图/柱状图/饼图
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

Vue.prototype.$echarts = echarts
