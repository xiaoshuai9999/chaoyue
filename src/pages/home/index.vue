<script setup>
import localforage from 'localforage'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import bdLogo from '@/assets/img/home/bd-logo.png'
import { deepCopy, unique } from '@utils/index.js'
const baidu = 'https://www.baidu.com/s?wd='
const searchWord = ref('')
const history = ref([])
onMounted(async () => {
  const list = await localforage.getItem('history') ?? []
  history.value = unique(list, 'word')
})

const goBaidu = async () => {
  window.open(baidu + searchWord.value)
  let list = deepCopy(history.value)
  list.unshift({
    time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    word: searchWord.value
  })
  list = unique(list, 'word')
  history.value = list
  console.log('history.value', list)
  await localforage.setItem('history', list)
}

const clearHistory = async () => {
  history.value = []
  await localforage.setItem('history', [])
}

const createFilter = (q) => {
  return (one) => {
    return (one.word.toLowerCase().indexOf(q.toLowerCase()) === 0)
  }
}
const querySearch = (q, cb) => {
  const results = q ? history.value.filter(createFilter(q)) : history.value
  cb(results.map(i => ({ ...i, value: i.word })))
}
const handleSelect = (item) => {
  searchWord.value = item.word
  window.open(baidu + searchWord.value)
}
</script>

<template>
  <div class="main-box">
    <div class="main-top">
      <el-image class="bd-logo" :src="bdLogo" fit="contain"></el-image>
      <el-autocomplete
          v-model="searchWord"
          :fetch-suggestions="querySearch"
          @keydown.enter="goBaidu"
          :clearable="true"
          :size="'large'"
          @select="handleSelect"
          style="width: 40vw;"
      ></el-autocomplete>
      <div class="bd-btn" @click="goBaidu">百度一下</div>
      <el-tooltip
          effect="dark"
          content="搜索记录"
          placement="right"
      >
        <span>
          <el-popover key="my-popover" placement="left" :width="650" trigger="click">
          <template #reference>
            <el-icon class="clock-icon" :size="24"><Clock /></el-icon>
          </template>
          <el-link type="primary" style="color: #4E6EF2;margin-bottom: 12px;" icon="el-icon-delete" @click="clearHistory">清空记录</el-link>
          <el-table :data="history" border max-height="450">
            <el-table-column type="index" label="#" width="40" />
            <el-table-column property="word" label="搜索词" />
            <el-table-column width="165" property="time" label="时间" />
          </el-table>
        </el-popover>
        </span>
      </el-tooltip>
    </div>
    <div class="main-content"></div>
  </div>
</template>

<style scoped lang="scss">
.main-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .main-top {
    display: flex;
    align-items: center;
    height: 50px;
    margin-left: 18%;
    .bd-logo {
      width: 100px;
      height: 32px;
      margin-right: 18px;
    }
    .bd-btn {
      height: 40px;
      width: 120px;
      font-size: 16px;
      color: #fff;
      background: #4E6EF2;
      text-align: center;
      line-height: 38px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
      &:hover {
        background: #4662D9;
      }
    }
    .clock-icon {
      cursor: pointer;
      color: #4E6EF2;
      margin-left: 12px;
    }
    :deep(.el-input__wrapper) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    :deep(.el-input__inner) {
      font-size: 18px;
      color: #333;
    }
  }
}
</style>
