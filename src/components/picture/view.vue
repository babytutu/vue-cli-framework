<template>
  <el-dialog @open="openDialog" @close="closeDialog" width="500px" :title="title" :visible="value">
    <div class="img-warper" v-if="!loading">
      <img :src="src" :alt="title" @error="nofind" v-if="!imgError">
      <div class="img-error" v-else>
        图片加载失败
      </div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'pic-view',
  data () {
    return {
      imgError: false,
      loading: true,
    }
  },
  props: {
    /**
     * 图片弹窗标题
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * 图片地址
     */
    src: {
      type: String,
      default: ''
    },
    /**
     * 是否显示弹窗
     */
    value: {
      type: Boolean
    },
  },
  methods: {
    /**
     * 打开弹窗
     */
    openDialog () {
      this.imgError = false
      this.loading = true
      this.$nextTick(() => {
        this.loading = false
      })
    },
    /**
     * 关闭图片查看弹窗
     */
    closeDialog () {
      this.$emit('input', false)
    },
    /**
     * 图片加载失败
     */
    nofind () {
      this.imgError = true
    }
  },
}
</script>
<style scoped>
.img-warper{
  margin: 0 auto;
  padding:20px;
}
.img-error{
  line-height: 50px;
  text-align: center;
}
.img-warper img{
  width:100%;
}
</style>
