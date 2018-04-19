<template>
  <div>
    <div class="custom-table">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        <el-table-column
          prop="index"
          label="序号"
          sortable
          width="180"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
    <div class="custom-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        total:0,
        allData: [],
      }
    },
    mounted(){
       for (let i = 0; i < 500; i++){
          this.allData.push({
            index: i,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          })
        }
        this.getTableData();
        this.total = this.allData.length;
    },
    methods: {
      formatter(row, column) {
        return row.index + 1
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.getTableData();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getTableData();
      },
      getTableData(){
        this.tableData = [];
        let startDataPosition = 0;
        if(this.currentPage !== 1) {
          startDataPosition = this.pageSize * (this.currentPage -1) ;
        }
        let endDataPosition = this.pageSize * this.currentPage;
        for(let i = startDataPosition; i < endDataPosition; i++) {
          if(i < this.allData.length) {
           this.tableData.push(this.allData[i]);
          }
        }
      }
    }
  }
</script>
<style>
  .custom-pagination{
    float: right;
  }
</style>
