<script setup>
import {ref} from "vue";
import {MoreFilled} from "@element-plus/icons-vue";

const list = ref([
  'Personal Information',
  'TimeSetting',
  'Schedule',
  'To-do-list',
  'Others',
])
</script>

<template>
  <div class="flex">
    <div class="setting" v-for="i in list" :key="i">
      <div>{{ i }}</div>
      <div class="space"></div>
      <div class="icon">
        <el-icon>
          <MoreFilled/>
        </el-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.setting {
  display: flex;
  width: 95%;
  height: 80px;
  align-items: center;
  justify-content: flex-start;
  border-bottom: solid 1px rgba(48, 56, 77, 0.2);
  transition: all 0.2s;
  cursor: pointer;
}

.setting:hover {
  height: 90px;
}

.space {
  flex: 1;
}

.icon {
  margin-right: 5px;
}
</style>