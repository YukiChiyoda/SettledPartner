<script setup>
import AssItem from "@/components/AssItem.vue";
import img1 from "@/assets/ass_avatar/1.png";
</script>

<template>
  <router-link class="flex" :to="{
    path: '/assist/do',
    query: {id: 1, name: '刘晓敏'}
  }">
    <AssItem>
      <template #avatar>
        <el-avatar :src="img1" :size="80"></el-avatar>
      </template>
      <template #name>
        刘晓敏
      </template>
      <template #text>
        心理健康专业硕士
      </template>
      <template #detail>
        心理健康专业硕士，有丰富的心理学研究背景，关注学生心理健康及备考压力问题，通过心理辅导和情感支持，帮助学生在研究生备考过程中保持平衡，获得心理上的慰藉和支持。
      </template>
    </AssItem>
  </router-link>

  <router-link class="flex" :to="{
    path: '/assist/do',
    query: {id: 1, name: '刘晓敏'}
  }">
    <AssItem>
      <template #avatar>
        <el-avatar :src="img1" :size="80"></el-avatar>
      </template>
      <template #name>
        刘晓敏
      </template>
      <template #text>
        心理健康专业硕士
      </template>
      <template #detail>
        心理健康专业硕士，有丰富的心理学研究背景，关注学生心理健康及备考压力问题，通过心理辅导和情感支持，帮助学生在研究生备考过程中保持平衡，获得心理上的慰藉和支持。
      </template>
    </AssItem>
  </router-link>
</template>

<style scoped>
*:hover {
  background-color: #ffffff;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>