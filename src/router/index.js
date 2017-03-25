import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import AddUser from '@/components/AddUser'

Vue.use(VueRouter)
Vue.use(VueResource)


const routes = [{
  path: '/add',
  component: AddUser
  },{
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
