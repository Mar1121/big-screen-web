<template>
    项目管理
    <el-table :data="tableData" style="width: 100%" v-loading="loading">
        <el-table-column label="ID" prop="date" />
        <el-table-column label="项目名称" prop="img" />
        <el-table-column>
            <template #header>
                项目图片
            </template>
            <template #default="scope">
                <el-image :src="scope.row.img" style="width: 100px; height: 100px" />
            </template>
        </el-table-column>
        <el-table-column label="项目描述" prop="name" />
        <el-table-column label="演示视屏" prop="address" />
        <el-table-column>
            <template #header>
                状态
            </template>
            <template #default="scope">
                <el-switch v-model="value1" />
            </template>
        </el-table-column>
        <el-table-column>
            <template #header>
                操作
            </template>
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>

    <div class="example-pagination-block">
        <el-pagination layout="prev, pager, next" :total="50" />
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
let loading = ref(false)
let value1 = ref(true)

const handleEdit = (index, row) => {
    console.log(index, row)
}
const handleDelete = (index, row) => {
    console.log(index, row)
}

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        img: '111'
    },
    {
        date: '2016-05-02',
        name: 'John',
        address: 'No. 189, Grove St, Los Angeles',
        img: '222'
    },
    {
        date: '2016-05-04',
        name: 'Morgan',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<style>
.example-pagination-block+.example-pagination-block {
    margin-top: 10px;
    text-align: center;
}

.example-pagination-block .example-demonstration {
    margin-bottom: 16px;
}

.el-pagination {
    justify-content: center;
}

body {
    margin: 0;
}

.example-showcase .el-loading-mask {
    z-index: 9;
}
</style>