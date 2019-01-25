<template>
  <div class="niuniu">
    <button id="btnCapture" @click="StartCapture()" class="btn">截图</button>
    <div id="info"></div>
    <div id="downloadNotice"></div>
    <img id="imgshow" />
    <div id="capturecontainer" style="height:0px;width:0px;"></div>
    <iframe id="startCaptureFrame" style="display:none;"></iframe>
  </div>
</template>
<script>
import niuniu from 'static/niuniu/capturewrapper'

export default {
  mounted () {
    niuniu.Init()
  },
  methods: {
    StartCapture () {
      niuniu.StartCapture()
    },
  }
}
</script>
