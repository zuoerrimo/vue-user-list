<template>
<div class='container'>
	 <router-view></router-view>
	<div class='row' v-if="$route.path !== '/add'">
		 <router-link
		      to="add"
		      class="btn btn-primary">
		      创建
    		</router-link>
		 <table class="table table-striped table-bordered">
		 	<thead>
		 		<tr>
			  	 	<td>序号</td>
			  	 	<td>名字</td>
			  	 	<td>性别</td>
			  	 	<td>年龄</td>
			  	 	<td>爱好</td>
			  	 	<td>操作</td>
			  	 </tr>
		 	</thead>
		 	<tbody>
 			  	 <tr v-for="(user,index) in list">
			  	 	<td>{{index+1}}</td>
			  	 	<td>{{user.name}}</td>
			  	 	<td>{{user.gender}}</td>
			  	 	<td>{{user.age}}</td>
			  	 	<td>{{user.hobby}}</td>
			  	 	<td class="btn btn-xs btn-danger delete-button" @click="deleteUserItem(index)">X</td>
			  	 </tr>
		 	</tbody>
		</table>
	</div>
</div>

</template>

<script>
export default {
  name: 'app',
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