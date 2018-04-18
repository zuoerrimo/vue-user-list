import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import AddUser from '@/components/AddUser'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Table from '@/components/Table'
import List from '@/components/List'
import CustomGrid from '@/components/Grid'


Vue.use(VueRouter)
Vue.use(VueResource)


const routes = [
  {
    path: '/login',
    component: Login
  },

  {
    path: '/main',
    component: Main,
    children:[
      {
        path: '/',
        component: List
      },
      {
        path: '/table',
        component: Table
      },
      {
        path: '/customGrid',
        component: CustomGrid
      },
      {
        path: '/list',
        component: List,
        children: [
         { 
          path: '/add',
          component: AddUser
          },
        ]
      },
    ]
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
