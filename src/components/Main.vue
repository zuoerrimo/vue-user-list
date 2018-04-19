<template>
  <div>
    <el-row  type="flex">
      <el-col :span='4'>
          <el-menu :router=true class="custom-menu" :default-active="getCurUrl">
            <el-menu-item index="/list"><i class="el-icon-menu"></i>带操作的表格</el-menu-item>
            <el-menu-item index="/table"><i class="el-icon-setting"></i>表格</el-menu-item>
            <el-menu-item index="/customGrid"><i class="el-icon-upload"></i>图形</el-menu-item>
          </el-menu>
      </el-col>
      <el-col :span="20" class="content">
          <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
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
    handleSelect(key, keyPath) {
     this.$router.push(key)
    }
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
