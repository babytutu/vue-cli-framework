<template>
  <div class="form-warper">
    <el-form :inline="inline" :ref="formName" :model="formData" :label-width="labelWidth" :label-position="labelPosition">
      <slot name="start"></slot>
      <el-form-item :prop="key" :rules="rules" :label="label" v-for="{
        label,
        key,
        placeholder,
        maxlength = 32,
        type,
        list,
        rules,
        dateType,
        width,
        desc,
        size = 'medium',
        isRange,
        className
      } in form" :key="key">
        <template v-if="!type || type === 'input'">
          <el-input :type="dateType || 'text'" :size="size" :placeholder="placeholder" clearable v-model.trim="formData[key]" :maxlength="maxlength" :style="{width}"></el-input>
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
          <el-select :size="size" :style="{width}" v-model="formData[key]" clearable :placeholder="placeholder">
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
          <span class="switch-desc">{{desc}}</span>
        </template>
        <template v-if="type === 'date'">
          <el-date-picker
            :size="size"
            v-model="formData[key]"
            :type="dateType"
            :style="{width}"
            :placeholder="placeholder">
          </el-date-picker>
        </template>
        <template v-if="type === 'time'">
          <el-time-picker
            :size="size"
            v-model="formData[key]"
            :is-range="isRange"
            :class="className"
            :placeholder="placeholder">
          </el-time-picker>
        </template>
      </el-form-item>
      <slot name="end"></slot>
      <el-form-item v-if="insideBtn">
        <slot name="button-left"></slot>
        <el-button size="medium" type="primary" @click="searchData">{{buttonText}}</el-button>
        <el-button size="medium" @click="resetForm" v-if="resetText">{{resetText}}</el-button>
        <slot name="button-right"></slot>
      </el-form-item>
      <slot name="right"></slot>
    </el-form>
    <div class="footer" v-if="!insideBtn">
      <slot name="button-left"></slot>
      <el-button size="medium" type="primary" @click="searchData">{{buttonText}}</el-button>
      <el-button size="medium" @click="resetForm" v-if="resetText">{{resetText}}</el-button>
      <slot name="button-right"></slot>
    </div>
  </div>
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
    // label位置
    labelPosition: {
      type: String,
      default: 'right'
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
    // 底部按钮在form内，左对齐
    insideBtn: {
      type: Boolean,
      default: true
    },
    // 是否重置表单，对话框中的表单使用
    reset: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    /**
     * 监听值的变化，用于父组件触发初始化表单
     */
    reset(newValue) {
      if (newValue) {
        this.$refs[this.formName].resetFields()
      }
    }
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
.switch-desc{
  margin-left: 10px;
  display: inline-block;
  color: #999;
}
.footer {
  padding-bottom: 20px;
  text-align: center;
}
.form-warper{
  padding: 20px 20px 0
}
</style>
