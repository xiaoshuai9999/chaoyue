<script setup>
import {ref} from "vue";
import TYPE from "./types.js";

const policeFilingHref = ref('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011502011885')
const policeFilingText = ref(`苏公网安备 32011502011885号`)
const domainFilingHref = ref('https://beian.miit.gov.cn/')
const domainFilingText = ref(`苏ICP备2023021194号-1`)
const types = ref(TYPE)
const access = (item) => {
  window.open(item.url)
}
TYPE[0].selected = true
const commonObj = ref(TYPE[0].common)
const mouseIn = (item) => {
  commonObj.value = item.common
  item.selected = true
  types.value.forEach(o => {
    if (o.type !== item.type) {
      o.selected = false
    }
  })
}
</script>
<template>
  <div class="home">
    <div class="title-box">
      <div class="title" />
      <el-link class="link" v-for="o in commonObj" :key="o.version" :href="o.url" type="danger" target="_blank">{{ o.version }}</el-link>
    </div>
    <el-scrollbar style="height:75vh; min-height: 225px;overflow-x: hidden;">
      <div class="entrance_box">
        <div
           v-for="(item, index) of types"
           :key="item.type"
           class='entrance_item'
           :class="{'selected': item.selected}"
           @mouseenter="mouseIn(item)"
        >
          <div class="item_title">{{ item.type }}</div>
          <div :class="['item_icon', `item_icon_${index+1}`]"></div>
          <el-button @click="access(item)" class="access-btn" size="large" color="#2D71FB" plain>立即访问</el-button>
        </div>
      </div>
    </el-scrollbar>
    <el-affix position="bottom" :offset="1">
      <div class="footer nine-color">
      <span>关于超越 |
        <el-link :href="policeFilingHref" target='_blank' class="margin-12-right" type="info">
          <img class="gonganbeian" src="../assets/img/gonganbeian.png"  alt=""/>{{ policeFilingText }}
        </el-link>
        <el-link :href="domainFilingHref" target='_blank' type="info">{{ domainFilingText }}</el-link>
        2023 个人版权所有
      </span>
      </div>
    </el-affix>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  overflow: hidden;
  :deep(.el-scrollbar__bar.is-horizontal) {
    display: none;
  }
}
.title-box {
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .title {
    top: 0;
    width: 25%;
    height: 100%;
    background: url("../assets/img/title.jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
    z-index: 1;
  }
  .link {
    margin-right: 32px;
    font-size: 22px;
  }
}

.entrance_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  column-gap: 24px;
  row-gap: 18px;
  width: 100vw;
  margin-top: 50px;
  padding-left: 5vw;
  .entrance_item {
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 14px;
    height: 100%;
    width: 20%;
    min-width: 220px;
    background: #FFFFFF;
    box-shadow: -9px 1px 24px 0 #9f9f9f1a;
    border-radius: 8px;
    &.selected {
      background: url("../assets/img/hover_bg.png") no-repeat;
      background-size: 100% 100%;
    }
    &:hover {
      background: url("../assets/img/hover_bg.png") no-repeat;
      background-size: 100% 100%;
    }
    .item_title {
      color: #000000;
      font-weight: 600;
      font-size: 20px;
    }
    .access-btn {
      margin-top: 12px;
    }
  }
}

.item_icon {
  width: 120px;
  height: 120px;
  margin-top: 12px;
}
.item_icon_1 {
  background: url("../assets/img/nodejs.png") no-repeat;
  background-size: 100% 100%;
}
.item_icon_2 {
  background: url("../assets/img/git.png") no-repeat;
  background-size: 100% 100%;
}
.item_icon_3 {
  background: url("../assets/img/jetbrains.png") no-repeat;
  background-size: 100% 100%;
}
.item_icon_4 {
  background: url("../assets/img/windows.png") no-repeat;
  background-size: 100% 100%;
}
.footer {
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  span {
    padding-top: 6px;
  }
}
</style>
