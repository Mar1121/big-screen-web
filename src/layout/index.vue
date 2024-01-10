<template>
    <div class="common-layout">
        <el-container>
            <!-- 侧边栏 -->
            <sideMenu></sideMenu>
            <!-- 内容 -->
            <el-container class="el-container2">
                <!-- 顶栏 -->
                <headerLayout></headerLayout>
                <!-- 主体内容 -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import sideMenu from 'layout/sideMenu/index.vue'
import headerLayout from 'layout/header/index.vue'
</script>

<style scoped>
.el-container2 {
    flex-direction: column;
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;

}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>