import niuniu from './niuniucapture'

var captureObj = null
var downloadUrl = 'static/niuniu/CaptureInstall.exe?'

/**
 * 用于初始化牛牛截图控件，此函数需要在页面加载完成后立即调用在此函数中
 * 您可以设置相关的截图的UI控制，如，画笔大小、边框颜色等等
 * 【这部分信息在niuniucapture.js中也有默认值，直接修改默认值也可 】
 */
function Init () {
  if (niuniu.isMacintosh()) {
    downloadUrl = 'static/niuniu/CaptureInstall.dmg?'
  }

  const NiuniuCaptureObject = niuniu.NiuniuCaptureObject
  captureObj = new NiuniuCaptureObject()

  // 设置控件加载完成以及截图完成的回调函数
  captureObj.FinishedCallback = OnCaptureFinishedCallback
  captureObj.PluginLoadedCallback = PluginLoadedCallback
  captureObj.VersionCallback = VersionCallback
  // 初始化控件
  captureObj.InitNiuniuCapture()
}

/**
 * 当控件成功加载后回调的的函数，您可以在此控制相应的UI显示
 */
function PluginLoadedCallback (success) {
  if (success) {
    console.log('PluginLoadedCallback')
  }
}

// 用于返回控件的版本号
function VersionCallback (ver) {
  // captureObj.Version
  // alert(ver)
}

// 根据是否是Chrome新版本来控制下载不同的控件安装包
function ShowDownLoad () {
  document.getElementById('niuniuInfo').innerHTML = '如果超过5秒无响应，请点此<a target="_blank" href="' + downloadUrl + '" + date.getMinutes() + date.getSeconds()">安装</a>'
}

/*
 * 当提示安装控件后，需要重新加载控件来使用截图；
 * 也有部分是需要刷新浏览器的
 */
function ReloadPlugin () {
  captureObj.LoadPlugin();
  if (captureObj.pluginValid()) {
    document.getElementById('niuniuInfo').innerHTML = "截图控件已经安装完毕，您可以进行截图了。"
  } else {
    var browserInfo = "查看控件是否被浏览器阻止，或通过浏览器设置中的加载项查看NiuniuCapture是否加载并正常运行"
    console.log('截图控件未能识别到，请按如下步骤检查:<br/>1. 确定您已经下载控件安装包并正常安装 <br/>2. ' + browserInfo +
      '<br/>3. 刷新页面或重新启动浏览器试下')
  }
}

/*
 * 截图入口函数，用于控制UI标签的显示
 */
function StartCapture () {
  var captureRet = Capture()
  // 从返回值来解析显示
  if (captureRet === niuniu.emCaptureFailed || captureRet === niuniu.emCaptureUnknown) {
    ShowDownLoad()
  }
}

/*
 * 此函数是根据在测试页面上的不同选项来进行截图，在实际应用中，您只需要根据您实际需要的截图模式，传入相应的参数即可
 */
function Capture () {
  return captureObj.DoCapture('1.jpg', 0, 0, 0, 0, 0, 0)
}

/*
 * 此处是截图后的回调函数，用于将截图的详细信息反馈回来，你需要调整此函数，完成图像数据的传输与显示
 */
function OnCaptureFinishedCallback (type, x, y, width, height, info, content, localpath) {
  if (type < 0) {
    // 需要重新安装控件
    ShowDownLoad()
    return
  }
  if (content) {
    document.getElementById('imgshow').src = 'data:image/jpeg;base64,' + content
  }

  var str = {
    1: '截图完成',
    2: '您取消了截图',
    3: '您保存了截图到本地',
  }
  document.getElementById('niuniuInfo').innerHTML = str[type]
  console.log(str[type])
}

export default {
  Init,
  StartCapture,
  ReloadPlugin
}
