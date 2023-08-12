<script setup>
import { traditionalized, simplified } from './config/handler.js'
import { ElNotification } from 'element-plus'
const bigWidth = ref('55%')
const smallWidth = ref('35%')
const transferContent = ref('')
const transferResult = ref('')
const transfer = (type) => {
  if (type === 0) {
    transferResult.value = traditionalized(transferContent.value)
  } else {
    transferResult.value = simplified(transferContent.value)
  }
  ElNotification({
    title: '提示',
    message: '转换结果已复制到剪切板！',
    position: 'top-left',
    type: 'success'
  })
}

</script>

<template>
  <div class="container">
    <div class="left">
<!--      <el-button class="is-big" type="primary" text size="small">我要变大</el-button>-->
      <div>
        <el-button type="primary" plain round @click="transfer(1)">转成简体</el-button>
        <el-button type="primary" plain round style="width: 120px" @click="transfer(0)">转成繁体</el-button>
      </div>
      <div>
        <el-input type="textarea" v-model="transferContent" :rows="10" placeholder="请输入需要转换的内容" />
      </div>
      <div>
        <el-input type="textarea" :value="transferResult" :rows="10" placeholder="结果" />
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<style scoped  lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 32px;
  padding: 16px 28px;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    row-gap: 12px;
    width: v-bind(bigWidth);
    height: 90vh;
    padding: 12px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
    .is-big {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .right {
    width: v-bind(smallWidth);
    height: 90vh;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  }
}
</style>
