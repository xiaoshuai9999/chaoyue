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
export default [
  { type: 'Node', url: 'https://registry.npmmirror.com/binary.html?path=node/', common: commonNode, selected: false },
  { type: 'Git', url: 'https://registry.npmmirror.com/binary.html?path=git-for-windows/', common: commonGit, selected: false },
  { type: 'Jetbrain', url: 'https://jetbra.in/s', common: [], selected: false },
  { type: 'windows', url: 'https://github.com/TGSAN/CMWTAT_Digital_Edition', common: commonWindow, selected: false }
]
