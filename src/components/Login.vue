<template>
  <div class="login-pane">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"
      class="demo-ruleForm">
      <el-form-item  prop="name">
        <el-input
          v-model.number="ruleForm.name">
              <template slot="prepend">
                <i class="el-icon-message"></i>
              </template>
          </el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" v-model="ruleForm.pass"
          auto-complete="off">
          <template slot="prepend">
            <i class="el-icon-edit"></i>
          </template>
          </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-submit"
         native-type="submit"
          @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default
  {
    name: 'login',
    data() {
      let checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          name: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
         this.$router.push('/main');
        });
      },
    }
  }
</script>
<style> 
  .login-pane{
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
  }
  .login-submit{
    width: 100%;
  }
</style>
