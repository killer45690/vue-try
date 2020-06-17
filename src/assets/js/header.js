// 左侧导航栏
const navMsg = [{
  name: '首页',
  path: '/'
}, {
  name: '日历视图',
  path: '/calendarView'
}, {
  name: '时间线视图',
  path: '/TimeLines'
}]
const importantView = [{
  name: '最重要',
  path: '/important/Danger',
  color: 'is_Danger'
},
{
  name: '很重要',
  path: '/important/Warning',
  color: 'is_Warning'
},
{
  name: '一般',
  path: '/important/normal',
  color: 'is_normal'
}]
// 右侧导航栏
const loginMsg = [{
  name: '注册',
  path: '/sign-up'
},
{
  name: '登录',
  path: '/login-in'
}]

// 用户下拉菜单项
const menuList = [{
  name: '设置',
  path: '/setting'
}, {
  name: '退出',
  path: 0
}]

export {
  navMsg,
  importantView,
  loginMsg,
  menuList
}
