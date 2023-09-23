const commonNode = [
  { version: '14.21.3', url: 'https://registry.npmmirror.com/-/binary/node/latest-v14.x/node-v14.21.3-x86.msi' },
  { version: '16.20.1', url: 'https://registry.npmmirror.com/-/binary/node/latest-v16.x/node-v16.20.1-x64.msi' }
]
const commonGit = [
  { version: '2.27.0', url: 'https://registry.npmmirror.com/-/binary/git-for-windows/v2.27.0.windows.1/Git-2.27.0-64-bit.exe' }
]
const commonWindow = [
  { version: '奶牛', url: 'https://chaoyue.cowtransfer.com/s/d7039b4b80d04f' },
  { version: 'github', url: 'https://github.com/TGSAN/CMWTAT_Digital_Edition/releases/tag/2.6.4.0' },
  { version: '官网', url: 'https://cmwtat.cloudmoe.com/cn.html' }
]

const jetbrainsPrefix = 'https://www.jetbrains.com.cn/'
const jetbrainsTool = ['idea', 'webstorm', 'pycharm', 'datagrip', 'goland'].map(t => ({ name: t, url: `${jetbrainsPrefix}${t}/`, icon: `jetbrains/${t}.ico` }))
// 开发工具
const devTools = [
  ...jetbrainsTool,
  { name: 'vscode', url: 'https://code.visualstudio.com/', icon: 'vscode.ico' },
  { name: 'HBuild X', url: 'https://www.dcloud.io/hbuilderx.html', icon: 'HBuilderX.ico' },
  { name: 'notepad++', url: 'https://notepad-plus-plus.org/downloads/', icon: 'notepad++.ico' },
  { name: '微信开发者工具', url: 'https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html' }
].map(i => ({ type: 'dev', ...i }))

const envTools = [
  { type: 'env', isCommon: true, name: 'Node', url: 'https://nodejs.cn/download/', icon: 'nodejs.png', common: commonNode },
  { type: 'env', isCommon: true, name: 'Git', url: 'https://registry.npmmirror.com/binary.html?path=git-for-windows/', icon: 'git.png', common: commonGit }
]
const otherTools = [
  { type: 'other', isCommon: true, name: 'Jetbrains', url: 'https://jetbra.in/s', icon: 'jetbrains.png', common: [] },
  { type: 'other', isCommon: true, name: 'windows', url: 'https://github.com/TGSAN/CMWTAT_Digital_Edition', icon: 'windows.png', common: commonWindow }

]
export default [
  ...devTools,
  ...envTools,
  ...otherTools
]
