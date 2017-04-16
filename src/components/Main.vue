<template>
  <div>
    <el-row  type="flex">
      <el-col :span='4'>
          <el-menu :router=true class="custom-menu" default-active="/list">
            <el-menu-item index="/list"><i class="el-icon-menu"></i>table-list</el-menu-item>
            <el-menu-item index="/table"><i class="el-icon-setting"></i>table</el-menu-item>
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
  name: 'main',
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
