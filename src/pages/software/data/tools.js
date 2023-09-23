import { defineStore } from 'pinia'
import staticTools from './types.js'
import { groupBy } from '@utils/index.js'

export default defineStore('useTools', () => {
  const tools = ref(staticTools)
  // 常用工具
  const commonTool = computed(() => tools.value.filter(i => i.isCommon))
  const groupTools = computed(() => {
    return groupBy(tools.value, 'type')
  })
  return { tools, groupTools, commonTool }
})
