<template>
  <el-dialog
    @close="closeDialog"
    :title="title"
    :visible="value"
    :width="width"
    class="dialog"
    center>
    <slot></slot>
    <span slot="footer" class="dialog-footer">
      <el-button type="info" @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'dialog-warper',
  props: {
    title: {
      type: String,
      default: '删除确认'
    },
    value: {
      type: Boolean
    },
    width: {
      type: String,
      default: '500px'
    },
  },
  methods: {
    closeDialog () {
      this.$emit('input', false)
    },
    confirm () {
      this.$emit('confirm')
      this.closeDialog()
    }
  },
}
</script>
<style scoped>
.dialog{
  text-align: center;
}
</style>
