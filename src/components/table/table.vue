<template>
  <div class="table-warper">
    <el-form :inline="true" :ref="formName" :model="searchForm" :rules="rules" v-if="showForm">
      <slot name="search"></slot>
      <el-button type="primary" @click="searchData">搜索</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form>
    <el-table :data="data.list">
      <slot name="left"></slot>
      <el-table-column v-for="{ label, key } in data.header"
                      :key="key"
                      :prop="key"
                      :label="label">
      </el-table-column>
      <slot name="right"></slot>
    </el-table>
    <div class="pagination" v-if="searchForm.total">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="searchForm.current"
        :page-sizes="pageSizes"
        :page-size.sync="searchForm.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="searchForm.total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'table-model',
  props: {
    // 表格信息
    data: {
      type: Object,
      default: () => ({
        list: [],
        header: []
      })
    },
    // 分页默认值
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    // 表单对象，用于获取分页相关参数
    searchForm: {
      type: Object,
    },
    // 验证规则
    rules: {
      type: Object,
    },
    // 组件内表单名称
    formName: {
      type: String,
      default: 'table-model-searchForm'
    },
    // 是否有表单
    showForm: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    /**
     * 每页条数变更,当前页数同步更新为1
     * @param {number} val 每页条数
     */
    handleSizeChange (val) {
      this.$emit('change', 1, val)
    },
    /**
     * 当前页数变更
     * @param {number} val 当前页数
     */
    handleCurrentChange (val) {
      this.$emit('change', val)
    },
    /**
     * 重置表单
     * 当前页重置为1
     * 每页条数重置为第一种
     */
    resetForm () {
      this.$refs[this.formName].resetFields()
      this.$emit('change', 1, this.pageSizes[0])
    },
    /**
     * 验证通过后查询数据，当前页重置为1
     */
    searchData () {
      this.$refs[this.formName].validate((valid) => {
        if (valid) {
          this.$emit('change', 1)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
}
</script>
<style scoped>
.table-warper{
  padding: 10px;
}
.pagination{
  padding-top: 10px;
  text-align: right;
}
</style>
