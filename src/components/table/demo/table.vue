<template>
  <div class="warper">
    <tableModel :list="table.list" :header="table.header" :formData="table.formData" @change="getDataList">
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
    <pre>{{table}}</pre>
  </div>
</template>
<script>
export default {
  data () {
    return {
      table: {
        formData: {
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
      },
    }
  },
  methods: {
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
  },
}
</script>
<style scoped>
.warper{
  height: 100%;
}
</style>
