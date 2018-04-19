<template>
<div>
	 <router-view></router-view>
	 <router-link
	  to="add"
	  class="btn btn-primary add-btn">
	  创建
	</router-link>
	<div class="custom-table">
		<el-table
	        :data="list"
	        border
	        style="width: 100%"
	        :default-sort = "{prop: 'date', order: 'descending'}"
	        >
	        <el-table-column
	          label="序号"
	          sortable
	          width="180">
           	 <template slot-scope="scope">
		       {{scope.$index+1}}
		      </template>
	        </el-table-column>
	        <el-table-column
	          prop="name"
	          label="名字"
	          sortable
	          width="180">
	        </el-table-column>
	        <el-table-column
	          prop="gender"
	          label="性别"
	          sortable
	          width="180">
	        </el-table-column>
	        <el-table-column
	          prop="age"
	          label="年龄">
	        </el-table-column>
	         <el-table-column
	          prop="hobby"
	          label="爱好">
	        </el-table-column>
		    <el-table-column
		      label="操作"
		      width="120">
		      <template slot-scope="scope">
		        <el-button
		          @click.native.prevent="deleteUserItem(scope.$index)"
		          type="text"
		          size="small">
		          移除
		        </el-button>
		      </template>
		    </el-table-column>
	      </el-table>
	</div>

</div>

</template>

<script>
export default {
  computed : {
      list () {
        // 从store中取出数据
        return this.$store.state.list
      }
    },
    methods : {
      deleteUserItem(idx) {
        this.$store.dispatch('deleteUser',idx)
      }
    }
}
</script>
<style type="text/css" scoped>
  .table{
    color: #fff;
    width: 100%;
  }
  .add-btn {
    margin-bottom: 10px;
  }
</style>
