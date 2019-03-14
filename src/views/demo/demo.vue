<template>
  <div class="home">
    <el-card class="box-card">
      <div slot="header">
        <span>插件列表</span>
      </div>
      <tableModel :list="table.list" :header="table.header">
        <el-table-column label="文档"
                         width="200"
                         slot="right">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row.github)"
                       size="small">GitHub</el-button>
            <el-button @click="handleClick(scope.row.website)"
                       size="small">文档</el-button>
          </template>
        </el-table-column>
      </tableModel>
    </el-card>
    <div class="blank"></div>
    <el-card class="box-card">
      <div slot="header">
        <span>音频播放</span>
      </div>
      <vaplayer :music="music" :autoplay="false"></vaplayer>
    </el-card>
    <div class="blank"></div>
    <el-card class="box-card">
      <div slot="header">
        <span>表格表单整合</span>
      </div>
      <el-tabs type="border-card">
        <el-tab-pane label="表格">
          <tableDemo></tableDemo>
        </el-tab-pane>
        <el-tab-pane label="表单">
          <formDemo></formDemo>
        </el-tab-pane>
        <el-tab-pane label="表单+表格">
          <formTableDemo></formTableDemo>
        </el-tab-pane>
        <el-tab-pane label="组件说明">
          <descDemo></descDemo>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <div class="blank"></div>
    <el-card class="box-card">
      <div slot="header">
        <span>简易封装弹窗组件</span>
      </div>
      <el-button @click="showDialogForm">带表单的弹窗</el-button>
      <el-button @click="showDialog">带确定按钮的弹窗</el-button>
      <el-button @click="showPic">图片预览</el-button>
      <el-dialog width="500px" title="带表单的弹窗" :visible.sync="isShowDialogForm">
        <formModel :insideBtn="false" :reset="isShowDialogForm" :formData="form.formData" :form="form.form" @change="saveForm" :inline="false" buttonText="保存"></formModel>
      </el-dialog>
      <confirm-dialog v-model="isShowDialog">带确定按钮的弹窗</confirm-dialog>
      <pic-view title="图片预览" src="static/images/logo.png" v-model="isShowPic">带确定按钮的弹窗</pic-view>
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
        <span>牛牛截图演示</span>
      </div>
      <niuniu @capture-finished="captureFinished">
         <el-button size="small">点击体验截图</el-button>
      </niuniu>
      <div class="blank"></div>
      <img :src="imgUrl" v-if="imgUrl" />
    </el-card>
    <div class="blank"></div>
    <el-card class="box-card">
      <div slot="header">
        <span>http请求</span>
        {{http}}
      </div>
      <h4>books-iceandfire</h4>
      <el-button @click="getData">获取数据</el-button>
      <el-table
        v-loading="loading"
        :data="books"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" label-width="120px">
              <el-form-item label="mediaType">
                <span>{{ props.row.mediaType }}</span>
              </el-form-item>
              <el-form-item label="pages">
                <span>{{ props.row.numberOfPages }}</span>
              </el-form-item>
              <el-form-item label="isbn">
                <span>{{ props.row.isbn }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="name"
          width="200">
        </el-table-column>
        <el-table-column
          prop="authors"
          label="authors">
        </el-table-column>
        <el-table-column
          prop="released"
          label="released">
        </el-table-column>
        <el-table-column
          prop="publisher"
          label="publisher">
        </el-table-column>
      </el-table>
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
import tableDemo from '@/components/table/demo/table'
import formDemo from '@/components/table/demo/form'
import descDemo from '@/components/table/demo/desc'
import formTableDemo from '@/components/table/demo/formTable'

export default {
  name: 'home',
  components: {
    tableDemo,
    formDemo,
    formTableDemo,
    descDemo,
  },
  data () {
    return {
      isShowDialog: false,
      isShowDialogForm: false,
      isShowPic: false,
      imgUrl: '',
      music: {
        title: '最清晰的声音',
        artist: '孙子涵',
        src: 'http://122.228.254.5/mp3.9ku.com/mp3/183/182127.mp3'
      },
      code: '<img alt="logo" src="static/images/logo.png" />',
      http: 'this.$axios.get(url)',
      table: {
        list: [
          {
            name: 'axios',
            desc: 'http请求工具',
            version: '0.18.0',
            website: 'https://github.com/axios/axios',
            github: 'https://github.com/axios/axios'
          },
          {
            name: 'echarts',
            desc: '精简版图表（线性/柱状/饼）',
            version: '4.0.0',
            website: 'http://echarts.baidu.com/',
            github: 'https://github.com/apache/incubator-echarts'
          },
          {
            name: 'element-ui',
            desc: '饿了么样式组件库',
            version: '2.5.4',
            website: 'http://element-cn.eleme.io/#/zh-CN/component/installation',
            github: 'https://github.com/ElemeFE/element'
          },
          {
            name: '牛牛截图',
            desc: '截图插件简单封装',
            version: '1.0.0.0',
            website: 'http://www.ggniu.cn',
            github: ''
          },
          {
            name: 'vue-aplayer',
            desc: '音频播放简单封装',
            version: '1.6.1',
            website: 'https://vue-aplayer.js.org',
            github: 'https://github.com/SevenOutman/vue-aplayer'
          },
        ],
        header: [
          {
            label: '名称',
            key: 'name',
          },
          {
            label: '版本',
            key: 'version',
          },
          {
            label: '介绍',
            key: 'desc',
          },
        ],
      },
      form: {
        formData: {
          name: '',
          select: '',
          radio: 3,
          checkbox: [],
          switch: false,
        },
        form: [
          {
            placeholder: '请输入姓名',
            label: '姓名',
            key: 'name',
            type: 'input',
            maxlength: 10,
            rules: [
              { required: true, message: '姓名不能为空' },
            ]
          },
          {
            label: '单选框',
            key: 'radio',
            type: 'radio',
            list: [
              {
                value: 1,
                label: '选项1'
              },
              {
                value: 2,
                label: '选项2'
              },
              {
                value: 3,
                label: '选项3'
              },
            ]
          },
          {
            placeholder: '请选择',
            label: '下拉菜单',
            key: 'select',
            type: 'select',
            list: [
              {
                value: 1,
                label: '选项1'
              },
              {
                value: 2,
                label: '选项2'
              },
              {
                value: 3,
                label: '选项3'
              },
            ]
          },
          {
            label: '多选框',
            key: 'checkbox',
            type: 'checkbox',
            list: [
              {
                value: 1,
                label: '选项1'
              },
              {
                value: 2,
                label: '选项2'
              },
              {
                value: 3,
                label: '选项3'
              },
            ]
          },
          {
            type: 'switch',
            key: 'switch',
            label: '开关'
          }
        ],
      },
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
              show: true
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
      books: [],
      detail: {},
      loading: false,
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    /**
     * 保存表单信息
     */
    saveForm () {
      console.log(this.form.formData)
    },
    /**
     * 表单弹窗
     */
    showDialogForm () {
      this.isShowDialogForm = true
    },
    /**
     * 弹窗
     */
    showDialog () {
      this.isShowDialog = true
    },
    /**
     * 图片预览
     */
    showPic () {
      this.isShowPic = true
    },
    /**
     * 插入截图插件返回的图片元素
     */
    captureFinished (url, img) {
      this.imgUrl = url
    },
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
     * 获取数据
     */
    getData () {
      this.loading = true
      this.$axios.get(this.$apis.iceandfire.books).then(res => {
        if (res && res.length) {
          this.$message.success('信息获取成功')
          this.books = res
        } else {
          this.$message.error('信息获取失败')
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
        this.$message.error('信息获取失败')
      })
    },
  }
}
</script>
<style lang="stylus" scoped>
.home{
  width: 90%;
  margin: 0 auto;
  padding-top: 200px;
  background: url('~static/images/logo.png') top no-repeat;
  .blank{
    height 20px
    width 100%
  }
}
</style>
