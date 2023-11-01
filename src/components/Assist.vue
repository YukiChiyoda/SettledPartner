<script setup>

</script>

<template>
  <el-card class="box-card">
    <el-skeleton style="--el-skeleton-circle-size: 100px">
      <template #template>
        <el-skeleton-item variant="circle" />
      </template>
    </el-skeleton>
    <el-skeleton />
  </el-card>
  <el-card class="box-card">
    <el-skeleton style="--el-skeleton-circle-size: 100px">
      <template #template>
        <el-skeleton-item variant="circle" />
      </template>
    </el-skeleton>
    <el-skeleton />
  </el-card>
</template>

<style scoped>
.box-card {
  margin: 30px;
  width: 600px;

}
</style>