<template>
  <div class="home">
    <el-card class="box-card">
      <div slot="header">
        <span>插件列表</span>
      </div>
      <el-table :data="plugins">
        <el-table-column prop="name"
                         label="名称"
                         width="180">
        </el-table-column>
        <el-table-column prop="version"
                         label="版本">
        </el-table-column>
        <el-table-column prop="desc"
                         label="介绍"
                         width="300">
        </el-table-column>
        <el-table-column label="文档"
                         width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row.github)"
                       size="small">GitHub</el-button>
            <el-button @click="handleClick(scope.row.website)"
                       size="small">文档</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="blank"></div>
    <el-card class="box-card">
      <div slot="header">
        <span>插入static文件夹下文件[使用相对public的路径]</span>
      </div>
      <img alt="logo" src="static/images/logo.png" />
      {{code}}
    </el-card>
    <div class="blank"></div>
    <el-card class="box-card">
      <div slot="header">
        <span>http请求</span>
        {{http}}
      </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>天气预报</span>
          <el-select v-model="city" placeholder="请选择" @change="getData" class="select-city">
            <el-option
              v-for="item in citys"
              :key="item.code"
              :label="item.name"
              :value="item.code">
            </el-option>
          </el-select>
          <el-button style="float: right; padding: 3px 0" type="text" @click="getData"><i class="el-icon-refresh"></i></el-button>
        </div>
        <el-table
          :data="weather.forecast"
          style="width: 100%">
          <el-table-column
            prop="ymd"
            label="日期"
            width="120">
          </el-table-column>
          <el-table-column
            prop="week"
            label="日期"
            width="120">
          </el-table-column>
          <el-table-column
            prop="type"
            label="天气"
            width="120">
          </el-table-column>
          <el-table-column
            prop="high"
            label="最高温度">
          </el-table-column>
          <el-table-column
            prop="low"
            label="最低温度">
          </el-table-column>
          <el-table-column
            prop="notice"
            label="注意"
            min-width="200">
          </el-table-column>
        </el-table>
      </el-card>
    </el-card>
    <div class="blank"></div>
    <el-card class="box-card">
      <div slot="header">
        <span>echarts</span>
      </div>
      <div id="line"
          :style="{width: '900px', height: '300px'}"></div>
      <div id="bar"
          :style="{width: '900px', height: '300px'}"></div>
      <div id="pie"
          :style="{width: '900px', height: '300px'}"></div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      res: '',
      code: '<img alt="logo" src="static/images/logo.png" />',
      http: 'this.$axios.get(url)',
      plugins: [{
        name: 'axios',
        desc: 'http请求工具',
        version: '0.18.0',
        website: 'https://github.com/axios/axios',
        github: 'https://github.com/axios/axios'
      },
      {
        name: 'echarts',
        desc: '精简版图表（线性/柱状/饼）',
        version: '4.2.0-rc.2',
        website: 'http://echarts.baidu.com/',
        github: 'https://github.com/apache/incubator-echarts'
      },
      {
        name: 'element-ui',
        desc: '饿了么样式组件库',
        version: '2.4.5',
        website: 'http://element-cn.eleme.io/#/zh-CN/component/installation',
        github: 'https://github.com/ElemeFE/element'
      },
      ],
      echarts: {
        line: {
          option: {
            title: {
              text: '线性图'
            },
            tooltip: {},
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
            }]
          }
        },
        bar: {
          option: {
            title: {
              text: '柱状图'
            },
            tooltip: {},
            xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          }
        },
        pie: {
          option: {
            title: {
              text: '饼图'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  { value: 335, name: '直接访问' },
                  { value: 310, name: '邮件营销' },
                  { value: 234, name: '联盟广告' },
                  { value: 135, name: '视频广告' },
                  { value: 1548, name: '搜索引擎' }
                ]
              }
            ]
          }
        }
      },
      weather: {
        city: '',
        province: '',
        forecast: []
      },
      city: '101210101',
      citys: [
        {
          name: '北京',
          code: '101010100'
        },
        {
          name: '上海',
          code: '101020100'
        },
        {
          name: '杭州',
          code: '101210101'
        },
      ]
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    /**
     * 新开页面打开
     */
    handleClick (url) {
      window.open(url)
    },
    /**
     * 绘制曲线图
     */
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let line = this.$echarts.init(document.getElementById('line'))
      let bar = this.$echarts.init(document.getElementById('bar'))
      let pie = this.$echarts.init(document.getElementById('pie'))
      // 绘制图表
      line.setOption(this.echarts.line.option)
      bar.setOption(this.echarts.bar.option)
      pie.setOption(this.echarts.pie.option)
    },
    /**
     * 获取天气数据
     */
    getData () {
      this.$axios.get(this.$apis.weather + this.city).then(res => {
        if (res.status === 200) {
          this.$message.success('天气预报信息获取成功')
          this.res = res
          const {
            cityInfo: {
              city,
              parent: province
            },
            data: {
              forecast
            }
          } = res
          this.weather = {
            city,
            province,
            forecast
          }
        } else {
          this.$message.error('天气预报信息获取失败')
        }
      }).catch(() => {
        this.$message.error('天气预报信息获取失败')
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.home{
  width: 900px;
  margin: 0 auto;
  padding-top: 200px;
  background: url('~static/images/logo.png') top no-repeat;
  .blank{
    height 20px
    width 100%
  }
  .select-city{
    margin-left 10px
  }
}
</style>
