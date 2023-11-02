<template>
  <div>
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Menu from "@/components/Menu.vue";
</script>

<style>
.el-input__wrapper {
  border-radius: 0;
  box-shadow: 0 1px 0 var(--color-border);
  transition: all 0.2s;
}

.el-input__wrapper:hover {
  box-shadow: 0 1px 0 var(--color-border-hover);
}

.el-input__wrapper.is-focus {
  box-shadow: 0 1px 0 var(--color-border);
}
</style>