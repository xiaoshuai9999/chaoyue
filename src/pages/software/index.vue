<script setup>
import { ref, toRefs } from 'vue'
import useToolStore from './data/tools.js'
const toolStore = useToolStore()
const { tools, commonTool, groupTools } = toRefs(toolStore)

const classify = ref([
  { code: 'common', name: '常用' },
  { code: 'dev', name: '编程开发' },
  { code: 'env', name: '环境工具' },
  { code: 'other', name: '其它' }
])
// 当前选中的分类
const currentClass = ref(classify.value[0])
// 当前展示的items
const currentItems = computed(() => {
  if (currentClass.value.code === 'common') {
    if (commonTool.value.length) {
      return commonTool.value.map(i => ({
        imgUrl: new URL(`../../assets/img/${i.type}/${i.icon}`, import.meta.url).href,
        ...i
      }))
    } else {
      currentClass.value = classify.value[1]
    }
  } else {
    return groupTools.value[currentClass.value.code].map(i => ({
      imgUrl: new URL(`../../assets/img/${i.type}/${i.icon}`, import.meta.url).href,
      ...i
    }))
  }
})
const getBackImg = (imgUrl) => ({ backgroundImage: `url('${imgUrl}')` })
const changeClassify = (c) => {
  currentClass.value = c
  setTimeout(() => {
    mouseIn(currentItems.value[0])
  }, 100)
}

// 访问URL
const access = (item) => { window.open(item.url) }
const currentSelectedItem = ref(currentItems.value[0])
const commonObj = ref(currentItems.value[0].common)
const mouseIn = (item) => {
  commonObj.value = item.common || []
  currentSelectedItem.value = item
  item.showStar = true
}
const mouseOut = (item) => {
  item.showStar = false
}
// 取消收藏
const changeCollect = (item, isCommon) => {
  console.log('isCommon', isCommon)
  console.log('item', item)
  const index = tools.value.findIndex(i => i.name === item.name)
  if (index !== -1) {
    tools.value[index].isCommon = isCommon
  }
}

</script>
<template>
  <div class="home">
    <div class="home-main">
      <div class="home-main-left">
        <div class="main-left-classify">
          <div
             v-for="(c, i) of classify"
             :key="c.code"
             :class="[`classify-item-${i}`, currentClass.code === c.code ? 'select' : '']"
             class="classify-item"
             @click="changeClassify(c)"
          >
            {{c.name}}
          </div>
        </div>
      </div>
      <div class="home-main-right">
        <div class="title-box">
          <el-link
              class="link"
              v-for="o in commonObj"
              :key="o.version"
              :href="o.url"
              type="danger"
              target="_blank"
          >{{ o.version }}</el-link>
        </div>
        <el-scrollbar style="height:75vh; min-height: 225px;overflow-x: hidden;">
          <div class="entrance_box">
            <div
                v-for="(item, index) of currentItems"
                :key="item.name"
                class='entrance_item'
                :class="{'selected': item.name === currentSelectedItem.name}"
                @mouseenter="mouseIn(item)"
                @mouseleave="mouseOut(item)"
                @click="access(item)"
            >
              <div class="item_title">{{ item.name }}</div>
              <div v-if="item.icon" :style="getBackImg(item.imgUrl)" :class="['item_icon', `item_icon_${index+1}`]"></div>
              <div v-else class="item_icon" style="background: #F2F9FB;">
                <el-icon size="24"><Picture /></el-icon>
              </div>
              <template v-if="item['showStar']">
                <el-icon v-if="item.isCommon" @click.stop="changeCollect(item, false)" class="star" size="26"><StarFilled /></el-icon>
                <el-icon v-else class="star" size="26" @click.stop="changeCollect(item, true)"><Star /></el-icon>
              </template>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: calc(100vh - 50px);
  overflow: hidden;
  background: #FAFAFA;
  .home-main {
    display: flex;
    height: 100%;
    padding-left: 10%;
    .home-main-left {
      display: flex;
      justify-content: center;
      width: 18%;
      min-width: 200px;
      .main-left-classify {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 500px;
        margin-top: 25%;
        border-radius: 10px;
        .classify-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 65px;
          font-size: 18px;
          border: 2px solid #96ceda;
          border-bottom: none;
          cursor: pointer;
          &.select {
            background: rgba(150, 206, 218, .5);
          }
          &:hover {
            background: rgba(150, 206, 218, .3);
          }
          &.classify-item-3 {
            border: 2px solid #96ceda;
          }
        }
      }
    }
    .home-main-right {
      width: 82%;
      padding: 24px;
      .title-box {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 10%;
        .title {
          top: 0;
          width: 25%;
          height: 100%;
          background: url("../../assets/img/title.jpg") no-repeat;
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
        width: 100%;
        margin-top: 50px;
        .entrance_item {
          box-sizing: border-box;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          position: relative;
          padding: 14px;
          height: 210px;
          width: 230px;
          min-width: 220px;
          background: #FFFFFF;
          box-shadow: -9px 1px 24px 0 #9f9f9f1a;
          border-radius: 8px;
          &.selected {
            background-image: linear-gradient(to bottom, #c3e4eb, #FFFFFF);
          }
          &:hover {
            cursor: pointer;
            background-image: linear-gradient(to bottom, #6FCBDD, #FFFFFF);
          }
          .item_title {
            color: #000000;
            font-weight: 600;
            font-size: 20px;
          }
          .access-btn {
            margin-top: 12px;
          }
          .star {
            position: absolute;
            top: 20px;
            right: 20px;
            color: #ffd04b;
          }
        }
      }

      .item_icon {
        width: 75px;
        height: 75px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      //$img-list: (nodejs, git, jetbrains, windows);
      //@for $i from 1 through 4 {
      //  .item_icon_#{$i} {
      //    //background: url("../../assets/img/#{nth($img-list, $i)}.png");
      //    background-repeat: no-repeat;
      //    background-size: 100% 100%;
      //  }
      //}
    }
  }
}
</style>
