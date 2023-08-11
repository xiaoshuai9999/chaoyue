import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import VueHook from 'alova/vue'

const alovaInstance = createAlova({
  baseURL: 'http://apis.juhe.cn',
  statesHook: VueHook,
  requestAdapter: GlobalFetch()
})

export default alovaInstance
