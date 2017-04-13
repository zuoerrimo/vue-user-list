import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import AddUser from '@/components/AddUser'
import Login from '@/components/Login'
import Main from '@/components/Main'


Vue.use(VueRouter)
Vue.use(VueResource)


const routes = [{
  path: '/add',
  component: AddUser
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: Main
  },
  {
  path : '/time-entries',
  component : AddUser,
  children : [{
    path : 'log-time',
    // 懒加载
    component : resolve => require(['@/components/Hello.vue'],resolve),
  }]
}];



export default new VueRouter({
 routes
})
