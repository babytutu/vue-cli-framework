<template>
  <div class="warper">
    <formModel :formData="table.formData" :form="table.form" @change="saveForm"></formModel>
    <tableModel :list="table.list" :header="table.header" :formData="table.formData" @change="getDataList" @multipleSelection="multipleSelection" :multipleSelection="table.multiple" :selection="true">
      <el-table-column label="文档"
                        width="200"
                        slot="table-right">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row.github)"
                      size="small">GitHub</el-button>
          <el-button @click="handleClick(scope.row.website)"
                      size="small">文档</el-button>
        </template>
      </el-table-column>
    </tableModel>
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          code<i class="header-icon el-icon-info"></i>
        </template>
        <pre>{{table}}</pre>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data () {
    return {
      table: {
        multiple: [],
        formData: {
          input: 180,
          select: '',
          radio: 3,
          checkbox: [],
          switch: false,
          total: 100,
          current: 1,
          pagesize: 10
        },
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
            version: '5.8.0',
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
        form: [
          {
            placeholder: '请输入总数',
            label: '输入框',
            key: 'input',
            type: 'input',
            maxlength: 10,
            rules: [
              { required: true, message: '不能为空' },
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
    }
  },
  methods: {
    /**
     * 单选/多选操作
     * @param {array} val 选中的对象数组
     */
    multipleSelection (val) {
      console.log(val)
      this.table.multiple = val
    },
    /**
     * 列表搜索
     * @param {number} current page
     * @param {string} pagesize pagesize
     */
    getDataList (current = 1, pagesize) {
      this.table.formData.current = current
      if (pagesize) this.table.formData.pagesize = pagesize
      // 模拟接口返回
      this.table.formData.total = Math.floor((Math.random() * 10) + 1) * 100
      console.log('getDataList', this.table.formData)
    },
    /**
     * 保存表单信息
     */
    saveForm () {
      console.log(this.table.formData)
    }
  },
}
</script>
<style scoped>
.warper{
  height: 100%;
}
</style>
