<template>
  <el-container class="table-warper">
    <el-header :height="height">
      <el-form :inline="inline" :ref="formName" :model="data.formData" :rules="data.rules" :label-width="labelWidth" v-if="data.formData">
        <slot name="search-start"></slot>
        <el-form-item :prop="key" :label="label" v-for="{
          label,
          key,
          placeholder,
          maxlength,
          type,
          list
        } in data.form" :key="key">
          <template v-if="!type || type === 'input'">
            <el-input :placeholder="placeholder" clearable v-model.trim="data.formData[key]" :maxlength="maxlength || 32" class="form-input"></el-input>
          </template>
          <template v-if="type === 'radio'">
            <el-radio-group v-model="data.formData[key]">
              <el-radio v-for="{
                label,
                value
              } in list" :key="value" :label="value">{{label}}</el-radio>
            </el-radio-group>
          </template>
          <template v-if="type === 'select'">
            <el-select v-model="data.formData[key]" clearable :placeholder="placeholder">
              <el-option
                v-for="{
                  value,
                  label
                } in list"
                :key="value"
                :label="label"
                :value="value">
              </el-option>
            </el-select>
          </template>
          <template v-if="type === 'checkbox'">
            <el-checkbox-group v-model="data.formData[key]">
              <el-checkbox v-for="{
                  value,
                  label
                } in list"
                :key="value"
                :label="value">{{label}}</el-checkbox>
            </el-checkbox-group>
          </template>
          <template v-if="type === 'switch'">
            <el-switch
              v-model="data.formData[key]"
              :name="label">
            </el-switch>
          </template>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchData">{{buttonText}}</el-button>
          <el-button @click="resetForm">{{resetText}}</el-button>
          <slot name="search-end"></slot>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <el-table ref="multipleTable" :data="data.list" v-if="data.list" @selection-change="handleSelectionChange">
        <el-table-column
          v-if="selection"
          type="selection"
          width="55">
        </el-table-column>
        <slot name="table-left"></slot>
        <el-table-column v-for="{ label, key } in data.header"
                        :key="key"
                        :prop="key"
                        :label="label">
        </el-table-column>
        <slot name="table-right"></slot>
      </el-table>
    </el-main>
    <el-footer>
      <div class="pagination" v-if="data.list && data.formData && data.formData.total">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="data.formData.current"
          :page-sizes="pageSizes"
          :page-size.sync="data.formData.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="data.formData.total">
        </el-pagination>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'table-model',
  props: {
    // 搜索区域高度，默认110
    height: {
      type: String,
      default: '110'
    },
    // 表单表格信息
    data: {
      type: Object,
    },
    // label宽度
    labelWidth: {
      type: String,
      default: '80px'
    },
    // selection是否
    selection: {
      type: Boolean,
      default: false,
    },
    // 表单中左侧按钮名称
    buttonText: {
      type: String,
      default: '查询'
    },
    // 表单重置按钮名称
    resetText: {
      type: String,
      default: '重置'
    },
    // 单行表单
    inline: {
      type: Boolean,
      default: true,
    },
    // 分页默认值
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    // 组件内表单名称
    formName: {
      type: String,
      default: 'table-model-searchForm'
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
    /**
     * 重置表单
     * 如果有列表，当前页重置为1，每页条数重置为第一种
     */
    resetForm () {
      this.$refs[this.formName].resetFields()
      if (this.data.list) {
        this.$emit('change', 1, this.pageSizes[0])
      }
    },
    /**
     * 验证通过后查询数据，当前页重置为1
     */
    searchData () {
      this.$refs[this.formName].validate((valid) => {
        if (valid) {
          this.$emit('change', 1)
        } else {
          this.$message.error('表单填写不正确')
          return false
        }
      })
    }
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
