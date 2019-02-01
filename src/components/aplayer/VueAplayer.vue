<template>
  <vueAplayer ref="player" :autoplay="autoplay" :music="music" :list="list" :list-folded="list.length === 1"></vueAplayer>
</template>

<script>
/**
 * 官方API,可以更加需求再增加props
 * @see https://www.npmjs.com/package/vue-aplayer
 */
import vueAplayer from 'vue-aplayer'
export default {
  props: {
    // 播放列表
    list: {
      default: () => []
    },
    // 自动播放，默认true
    autoplay: {
      type: Boolean,
      default: true
    },
    // 当前播放的音乐
    music: {
      type: Object,
    },
  },
  data () {
    return {
      player: '',
    }
  },
  components: {
    vueAplayer
  },
  /**
   * 初始化播放器
   */
  mounted () {
    this.player = this.$refs.player
  },
  /**
   * 播放器关闭时，暂停录音并清空播放器
   */
  destroyed () {
    this.player.pause()
    this.player = ''
  }
}
</script>
