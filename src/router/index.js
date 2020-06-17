import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../page/login'
import CalendarView from '../page/CalendarView'
import TimeLines from '../page/TimeLines'
import ImportantView from '../page/ImportantView'
import Home from '../page/Home'
import SingUp from '../page/SignUp'
import singleView from '../page/singleView'
import Editpage from '../page/Editpage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login-in',
    component: login
  },
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/TimeLines',
    component: TimeLines
  },
  {
    path: '/CalendarView',
    component: CalendarView
  },
  {
    path: '/important/:important',
    component: ImportantView
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/sign-up',
    component: SingUp
  },
  {
    path: '/singleView/:id',
    component: singleView
  },
  {
    path: '/Editpage/:id',
    component: Editpage
  }

]

const router = new VueRouter({
  routes
})

export default router
