
import Login from '@/views/Login'
import Main from '@/views/Main'
import Table from '@/views/Table'
import List from '@/views/List'
import CustomGrid from '@/views/Grid'

export const routes = [{
  path: '/', 
   redirect: 'login'
  }, {
    path: '/login',
    component: Login,
  }, {
    path: '/main',
    component: Main,
    redirect: 'table',
    children:[
      {
        path: '/table',
        component: Table,
        icon: 'el-icon-setting',
        text: 'table',
      }, {
        path: '/customGrid',
        component: CustomGrid,
        icon: 'el-icon-upload',
        text: 'vue-grid-layout',
      }, {
        path: '/list',
        component: List,
        icon: 'el-icon-setting',
        text: 'table-with-form',
      },
    ]
  }]
