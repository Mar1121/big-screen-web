<template>
    <div class="container">
        <h1>大屏管理系统</h1>
        <el-row class="tac">
            <el-col>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>

                    <el-menu-item index="/projectMaster">
                        <el-icon><icon-menu /></el-icon>
                        <span>项目管理</span>
                    </el-menu-item>
                    <el-menu-item index="/videoMaster">
                        <el-icon><icon-menu /></el-icon>
                        <span>视频管理</span>
                    </el-menu-item>

                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
</style>
<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
  