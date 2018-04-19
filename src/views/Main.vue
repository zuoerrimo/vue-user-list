<template>
  <div>
    <el-row  type="flex">
      <el-col :span='4'>
          <el-menu :router=true class="custom-menu" :default-active="getCurUrl">
            <el-menu-item v-for="(item, mindex) in menu" :index="item.url" :key="mindex">
                <i class="item.icon"></i>
                {{item.text}}
            </el-menu-item>
          </el-menu>
      </el-col>
      <el-col :span="20" class="content">
          <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
 import {genMenu} from '@/router'
  export default {
    data() {
      return {
        menu: [],
      }
    },
    computed: {
      getCurUrl() {
        let curPath = this.$route.fullPath
        if(curPath === '/main') {
          return '/list'
        } else {
          return curPath
        }
      }
    },
    methods: {
    },
    mounted() {
    },
    created() {
      this.menu = genMenu()
    }
  }
</script>
<style type="text/css">
  .custom-menu{
    margin-top: 10px;
  }

  .content{
    padding: 10px;
  }
</style>
