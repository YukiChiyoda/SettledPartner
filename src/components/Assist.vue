<script setup>

</script>

<template>
  <router-link v-for="n in 5" :key="n" :to="{
    path: '/assist/do',
    query: {id: n}
  }">
  <el-card class="box-card">
    <el-skeleton style="--el-skeleton-circle-size: 100px; cursor: pointer;">
      <template #template>
        <el-skeleton-item variant="circle" />
      </template>
    </el-skeleton>
    <el-skeleton />
  </el-card>
  </router-link>
</template>

<style scoped>
.box-card {
  margin: 30px;
  width: 40%;
  transition: all 0.2s;
}
.box-card:hover{
  margin: 20px;
  width: 43%;
  background-color: rgba(148, 156, 77, 0.5);
}

@media screen and (max-width: 1024px){
  .box-card{
    width: 90%;
  }
  .box-card:hover{
    width: 92%;
  }
}
</style>