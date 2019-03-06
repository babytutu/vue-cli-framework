<template>
  <el-container class="table-warper">
    <el-main>
      <el-table ref="multipleTable" :data="list" @selection-change="handleSelectionChange">
        <el-table-column
          v-if="selection"
          type="selection"
          width="55">
        </el-table-column>
        <slot name="left"></slot>
        <el-table-column v-for="{ label, key } in header"
                        :key="key"
                        :prop="key"
                        :label="label">
        </el-table-column>
        <slot name="right"></slot>
      </el-table>
    </el-main>
    <el-footer>
      <div class="pagination" v-if="list && formData && formData.total">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="formData.current"
          :page-sizes="pageSizes"
          :page-size.sync="formData.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="formData.total">
        </el-pagination>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'table-model',
  props: {
    // 列表数据
    list: {
      type: Array,
    },
    // 表单表格信息
    formData: {
      type: Object,
    },
    // header表头
    header: {
      type: Array,
    },
    // selection是否
    selection: {
      type: Boolean,
      default: false,
    },
    // 分页默认值
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    // 选中的列数
    multipleSelection: {
      type: Array
    },
  },
  mounted () {
    if (this.multipleSelection) {
      const rows = this.multipleSelection
      rows.forEach(row => {
        this.$refs.multipleTable.toggleRowSelection(row)
      })
    }
  },
  methods: {
    /**
     * 有选择操作时，默认渲染已选中的值
     * @param {array} val 选中的列
     */
    handleSelectionChange (val) {
      if (this.multipleSelection) {
        this.$emit('multipleSelection', val)
      }
    },
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
  },
}
</script>
<style scoped>
.table-warper{
  height: 100%;
}
.pagination{
  padding-top: 10px;
  text-align: right;
}
.form-input{
  width: 200px;
}
</style>
