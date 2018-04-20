
import Login from '@/views/Login'
import Main from '@/views/Main'
import Table from '@/views/Table'
import List from '@/views/List'
import CustomGrid from '@/views/Grid'
import Line from '@/views/Line'

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
      }, {
        path: '/line',
        component: Line,
        icon: 'el-icon-setting',
        text: '饼图',
      },
    ]
  }]
