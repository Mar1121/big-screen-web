<template>
    <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" label-width="120px" class="demo-loginForm">

        <el-form-item label="账号" prop="username">
            <el-input v-model="loginForm.username" type="usernameword" autocomplete="off" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
            <el-input show-password v-model="loginForm.password" type="usernameword" autocomplete="off" />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm(loginFormRef)">登录</el-button>

        </el-form-item>
    </el-form>
</template>
  
<script  setup>
import router from '@/router';
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router';
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
    console.log(formEl);
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
            router.push('/home')
        } else {
            console.log('error submit!')
            return false
        }
    })
}


</script>
<style scoped>
.el-input {
    width: 30%;
}
</style>