<template>
  <div>
    <div @click="StartCapture"><slot></slot></div>
    <div id="capturecontainer" style="height:0px;width:0px;"></div>
    <iframe id="startCaptureFrame" style="display:none;"></iframe>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible">
      <span>如果超过5秒无响应，请点此<a target="_blank" :href="downloadUrl">安装截图插件</a></span>
    </el-dialog>
  </div>
</template>
<script>
/**
 * 牛牛截图控件Web版本 更新日期：2018-05-09
 * @see http://www.ggniu.cn/testcapture.htm
 */
import niuniu from 'static/niuniu/niuniucapture'

export default {
  name: 'niuniu',
  data () {
    return {
      downloadUrl: 'static/niuniu/CaptureInstall.exe?',
      captureObj: {},
      dialogVisible: false,
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
      this.dialogVisible = true
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
        const imgObj = 'data:image/jpg;base64,' + content
        let img = new Image()
        img.src = imgObj
        img.style.width = '130px'
        img.setAttribute('data-id', content)
        img.setAttribute('data-imgurl', content)
        this.$emit('capture-finished', imgObj, img)
      }

      var str = {
        1: '截图完成',
        2: '您取消了截图',
        3: '您保存了截图到本地',
      }
      console.log(str[type])
    },
  },
}
</script>
