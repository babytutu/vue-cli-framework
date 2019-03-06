<template>
  <el-container class="form-warper">
    <el-form :inline="inline" :ref="formName" :model="formData" :label-width="labelWidth">
      <slot name="search-start"></slot>
      <el-form-item :prop="key" :rules="rules" :label="label" v-for="{
        label,
        key,
        placeholder,
        maxlength,
        type,
        list,
        rules
      } in form" :key="key">
        <template v-if="!type || type === 'input'">
          <el-input :placeholder="placeholder" clearable v-model.trim="formData[key]" :maxlength="maxlength || 32" class="form-input"></el-input>
        </template>
        <template v-if="type === 'radio'">
          <el-radio-group v-model="formData[key]">
            <el-radio v-for="{
              label,
              value
            } in list" :key="value" :label="value">{{label}}</el-radio>
          </el-radio-group>
        </template>
        <template v-if="type === 'select'">
          <el-select v-model="formData[key]" clearable :placeholder="placeholder">
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
          <el-checkbox-group v-model="formData[key]">
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
            v-model="formData[key]"
            :name="label">
          </el-switch>
        </template>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchData">{{buttonText}}</el-button>
        <el-button @click="resetForm" v-if="resetText">{{resetText}}</el-button>
        <slot name="search-end"></slot>
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
export default {
  name: 'form-model',
  props: {
    // 表格信息对象
    formData: {
      type: Object,
    },
    // 表格内容
    form: {
      type: Array
    },
    // label宽度
    labelWidth: {
      type: String,
      default: '80px'
    },
    // 表单中左侧按钮名称
    buttonText: {
      type: String,
      default: '查询'
    },
    // 表单重置按钮名称
    resetText: {
      type: String,
      default: ''
    },
    // 单行表单
    inline: {
      type: Boolean,
      default: true,
    },
    // 组件内表单名称
    formName: {
      type: String,
      default: 'form-model-searchForm'
    },
  },
  methods: {
    /**
     * 重置表单
     * 如果有列表，当前页重置为1，每页条数重置为第一种
     */
    resetForm () {
      this.$refs[this.formName].resetFields()
      this.$emit('change', 'reset')
    },
    /**
     * 验证通过
     */
    searchData () {
      this.$refs[this.formName].validate((valid) => {
        if (valid) {
          this.$emit('change')
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
