<template>
  <el-row class="page-main-container">
    <el-col :span="24" class="search-col">
      <el-form :inline="true" :model="queryUserParam" ref="queryUserParam">
        <el-form-item label="姓名：" prop="name" >
          <el-input style="width:100px" v-model="queryUserParam.name" placeholder="你的姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别：" prop="sex">
          <el-select style="width:110px" v-model="queryUserParam.sex" placeholder="查询性别">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日">
          <el-form-item prop="birthdayStart">
            <el-date-picker type="date" placeholder="选择日期" v-model="queryUserParam.birthdayStart" ></el-date-picker>
          </el-form-item>-
          <el-form-item prop="birthdayEnd">
            <el-date-picker type="date" placeholder="选择日期" v-model="queryUserParam.birthdayEnd" ></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryTableData">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="resetForm('queryUserParam')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="24" class="table-col">
      <el-table :data="tableData.list" highlight-current-row v-loading="tableData.listLoading" @selection-change="selsChange" >
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" width="60">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100" sortable>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="100"  sortable>
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="100" sortable>
        </el-table-column>
        <el-table-column prop="birthday" label="生日" width="100" sortable>
        </el-table-column>
        <el-table-column prop="addr" label="地址" min-width="180" sortable>
        </el-table-column>
        <el-table-column label="操作" width="250">
          <template slot-scope="scope" >
            <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete">删除</el-button>
          </template>
			</el-table-column>
      </el-table>

      <!--工具条-->
		  <el-col :span="24">
        <el-pagination 

          @size-change="handleSizeChange" 
          @current-change="handleCurrentChange"
          :page-sizes="[10, 15, 20]"
          :page-size="10"
          :total="tableData.total"
          layout="total, sizes, prev, pager, next, jumper"
          ></el-pagination>
		  </el-col>
    </el-col>
  </el-row>
</template>

<script>
import { queryUser,deleteUser } from '@/api/api.js';

export default {
  name: 'mainpage',
  data () {
    return {
      queryUserParam:{
        name:"",
        sex:"",
        birthdayStart:"",
        birthdayEnd:"",
      },
      tableData:{
        listLoading : false,
        list:[],
        pageSize : 10,
        pageNow: 1,
        total:0
      }
    }
  },
  methods:{
    queryTableData(){
      let queryParam={
        page : this.tableData.pageNow,
        pageSize : this.tableData.pageSize,
        name : this.queryUserParam.name,
        querysex  : this.queryUserParam.sex,
        birthdayStart : this.queryUserParam.birthdayStart,
        birthdayEnd : this.queryUserParam.birthdayEnd,
      }
      this.tableData.listLoading = true;
      queryUser(queryParam).then((res) => {
        this.tableData.total = res.total;
				this.tableData.list = res.users;
        this.tableData.listLoading = false;
      });
    },
    handleDelete: function(index, row){
      this.$confirm('确认删除该记录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.tableData.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					deleteUser(para).then((res) => {
            this.tableData.listLoading = false;
            if(res.code === 200 ){
              this.$message({
                message: '删除成功',
                type: 'success'
              });
            }else{
              this.$message({
                type: 'error',
                message: res.msg
              }); 
            }
						//NProgress.done();
						this.queryTableData();
          });
				}).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });  
				});
    },
    handleEdit: function(index, row){
      console.log(row.id);
    },
    selsChange: function (sels) {
      console.log(sels);
    },
    handleSizeChange : function(val){
      this.tableData.pageSize = val;
    },
    handleCurrentChange : function(val){
      this.tableData.pageNow = val;
      this.queryTableData();
    },
    resetForm : function(formname){
      this.$refs[formname].resetFields();
    }
  },
  mounted(){
    this.queryTableData();
  }
}

</script>

<style scoped lang="scss">

  .page-main-container{
    padding: 10px;
    .search-col{
      border: 1px solid black;
      padding: 10px;
      border-radius: 6px;
    }
    .table-col{
      border: 1px solid black;
      margin-top: 10px;
      border-radius: 6px;
      padding: 10px;
    }
    .el-form-item{
      margin-bottom: 0px;
    }
  }
</style>