<template>
    <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" label-width="120px" class="demo-loginForm">
        <h1>虚拟大屏管理系统</h1>
        <el-form-item label="账号" prop="username">
            <el-input v-model="loginForm.username" type="usernameword" autocomplete="off" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
            <el-input show-password v-model="loginForm.password" type="usernameword" autocomplete="off" />
        </el-form-item>

        <el-form-item>
            <el-button class="button-sub" type="primary" @click="submitForm(loginFormRef)">登录</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script  setup>
import router from '@/router';
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router';
import { loginApi } from '@/api/login.js'
const loginFormRef = ref()
// 校验用户名的函数
const valiDateUsername = (rule, value, callback) => {
    // callback('dadad')表示校验不通过
    if (value === '') {
        callback('请输入账号')
    }
    callback()
}
// 校验密码的函数
const valiDatePassword = (rule, value, callback) => {
    if (value === '') {
        callback('请输入密码')
    }
    callback()
}
// form表单的数据
const loginForm = reactive({
    username: '',
    password: '',

})
// 表单的校验规则
const rules = reactive({
    username: [{ validator: valiDateUsername, trigger: 'blur' }],
    password: [{ validator: valiDatePassword, trigger: 'blur' }],
})
// 提交表单的方法
const submitForm = (formEl) => {
    // console.log(formEl);
    if (!formEl) return
    formEl.validate(async (valid) => {
        if (valid) {
            console.log('submit!')
            try {
                let res = await loginApi({
                    username: loginForm.username,
                    password: loginForm.password
                })
                console.log(res);
            }
            catch (e) {

            }
            // 登录成功后跳转到首页
            // router.push('/home')
        } else {
            console.log('error submit!')
            return false
        }
    })
}


</script>
<style scoped>
.el-input {
    width: 200px;
}

.el-form {
    width: 400px !important;
    height: 200px;
    border: 1px solid #ccc;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.button-sub {
    width: 200px;
    background-color: aquamarine;
}
</style>