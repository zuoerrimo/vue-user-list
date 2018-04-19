import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './route.js'



Vue.use(VueRouter)
Vue.use(VueResource)

export function genMenu() {
  return _.map(routes[2].children, (item, index) => {
    return {
      icon: item.icon,
      url: item.path,
      text: item.text,
    }
  })

}

export default new VueRouter({
 routes
})
