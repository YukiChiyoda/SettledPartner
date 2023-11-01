<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <router-link to="/"><el-menu-item index="1">Home</el-menu-item></router-link>
    <router-link to="/partner"><el-menu-item index="2">Partner</el-menu-item></router-link>
    <router-link to="/assist"><el-menu-item index="3">Assistance</el-menu-item></router-link>
    <router-link to="/pet"><el-menu-item index="4">Pet</el-menu-item></router-link>
    <router-link to="/wel"><el-menu-item index="5">Test</el-menu-item></router-link>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Partner from "@/components/Partner.vue";

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>