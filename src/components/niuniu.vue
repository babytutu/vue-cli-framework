<template>
  <div class="niuniu">
    <div @click="StartCapture"><slot>截图</slot></div>
    <div id="downloadNotice" v-html="info"></div>
    <div id="capturecontainer" style="height:0px;width:0px;"></div>
    <iframe id="startCaptureFrame" style="display:none;"></iframe>
  </div>
</template>
<script>
import niuniu from 'static/niuniu/niuniucapture'

export default {
  name: 'niuniu',
  data () {
    return {
      downloadUrl: 'static/niuniu/CaptureInstall.exe?',
      captureObj: {},
      info: '',
    }
  },
  mounted () {
    this.InitNiuniu()
  },
  methods: {
    /**
     * 初始化插件
     */
    InitNiuniu () {
      if (niuniu.isMacintosh()) {
        this.downloadUrl = 'static/niuniu/CaptureInstall.dmg?'
      }

      const NiuniuCaptureObject = niuniu.NiuniuCaptureObject
      this.captureObj = new NiuniuCaptureObject()

      // 设置控件加载完成以及截图完成的回调函数
      this.captureObj.FinishedCallback = this.OnCaptureFinishedCallback
      this.captureObj.PluginLoadedCallback = this.PluginLoadedCallback
      // 初始化控件
      this.captureObj.InitNiuniuCapture()
    },
    /**
     * 下载插件
     */
    ShowDownLoad () {
      this.info = `如果超过5秒无响应，请点此<a target="_blank" href="${this.downloadUrl}">安装</a>`
    },
    /**
     * 开始截图
     */
    StartCapture () {
      let captureRet = this.captureObj.DoCapture('1.jpg', 0, 0, 0, 0, 0, 0)
      // 从返回值来解析显示
      if (captureRet === niuniu.emCaptureFailed || captureRet === niuniu.emCaptureUnknown) {
        this.ShowDownLoad()
      }
    },
    /**
     * 此处是截图后的回调函数，用于将截图的详细信息反馈回来，你需要调整此函数，完成图像数据的传输与显示
     */
    OnCaptureFinishedCallback (type, x, y, width, height, info, content, localpath) {
      if (type < 0) {
        // 需要重新安装控件
        this.ShowDownLoad()
        return
      }
      if (content) {
        this.$emit('input', 'data:image/jpeg;base64,' + content)
      }

      var str = {
        1: '截图完成',
        2: '您取消了截图',
        3: '您保存了截图到本地',
      }
      console.log(str[type])
    },
    /**
     * 当提示安装控件后，需要重新加载控件来使用截图；
     * 也有部分是需要刷新浏览器的
     */
    ReloadPlugin () {
      this.captureObj.LoadPlugin()
      if (this.captureObj.pluginValid()) {
        this.info = '截图控件已经安装完毕，您可以进行截图了。'
      } else {
        this.info = '截图控件未能识别到'
        // var browserInfo = "查看控件是否被浏览器阻止，或通过浏览器设置中的加载项查看NiuniuCapture是否加载并正常运行"
        // console.log('截图控件未能识别到，请按如下步骤检查:<br/>1. 确定您已经下载控件安装包并正常安装 <br/>2. ' + browserInfo +
        //   '<br/>3. 刷新页面或重新启动浏览器试下')
      }
    },
  },
}
</script>
