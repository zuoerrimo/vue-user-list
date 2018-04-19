<template>
<div>
  <el-dialog title="添加" :visible.sync="showing">
    <add-user @closeModal="closeModal"></add-user>
  </el-dialog>
  <div class="add-btn">
     <el-button
      @click.native.prevent="showModal"
      class="btn btn-primary"
      type="text"
      size="small">
      创建
    </el-button>
  </div>
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
     >
       <template slot-scope="scope">
         {{scope.$index+1}}
       </template>
     </el-table-column>
      <el-table-column
          v-for="(item, index) in columns"
          :prop="item.en"
          :label="item.cn"
          :key="index"
          sortable
          width="180">
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
 import AddUser from '@/views/AddUser'
  export default {
    components: {
      AddUser,
    },
    data() {
      return {
        showing: false,
        columns: [{
          en: 'name',
          cn: '名字',
        }, {
          en: 'gender',
          cn: '性别',
        }, {
          en: 'age',
          cn: '年龄',
        }, {
          en: 'hobby',
          cn: '爱好',
        }]
      }
    },
    computed : {
      list () {
          // 从store中取出数据
          return this.$store.state.list
        }
      },
      methods : {
        deleteUserItem(idx) {
          this.$store.dispatch('deleteUser',idx)
        },
        showModal() {
          this.showing = true
        },
        closeModal() {
          this.showing = false
        },
      },
      mounted() {
      },
      created() {
      }
    }
  </script>
<style type="text/css" scoped>
  .table{
    color: #fff;
    width: 100%;
  }
  .add-btn {
    width: 100%;
    margin-bottom: 10px;
  }
</style>
