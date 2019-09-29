<template>
  <div id="login" @keydown.13="submitForm">
    <el-card class="login-card">
      <div slot="header" class="clearfix login-header">
        <i class="el-icon-goods"></i>
        <span>管理系统</span>
      </div>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登陆</el-button>
          <el-button @click="restForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { login } from "../api/http";
// import { getLogin } from '../api/mock'
// import {allRoute} from '../route/router'

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        // prop
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "密码长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ]
      },
    };
  },
  methods: {
    //清空表单
    restForm() {
      this.$refs.loginForm.resetFields();
    },
    //提交表单
    submitForm() {
      const _this = this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          login(this.loginForm).then(response => {
            let { code, token, msg } = response;
            if (code === 0) {
              let userInf = localStorage.setItem("token", token);
              _this.$store.dispatch("getRole", { token });
              this.$message({
                message: msg,
                type: "success",
                duration: 1000,
                onClose() {
                  _this.$router.replace("/");
                }
              });
            } else if (code === 1) {
              this.$message({
                message: msg,
                type: "warning",
                duration: 1000
              });
            }
          });
        } else {
          this.$message({
            message: "登录失败,请重新填写表单",
            type: "warning",
            duration: 1000
          });
          return false;
        }
      });
    }
  },
  
};
</script>
<style lang="less" Scoped>
#login {
  height: 100%;
  background-color: #2d3a4b;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    background-color: #141c23;
    width: 500px;
    border: none;
    color: #fff;
    .login-header {
      font-size: 20px;
      text-align: center;
    }
    label {
      color: #fff;
    }
  }
}
</style>