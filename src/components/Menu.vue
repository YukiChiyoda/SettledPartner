<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <router-link to="/home">
      <el-menu-item index="1">Home</el-menu-item>
    </router-link>
    <router-link to="/partner">
      <el-menu-item index="2">Partner</el-menu-item>
    </router-link>
    <router-link to="/assist">
      <el-menu-item index="3">Assistance</el-menu-item>
    </router-link>
    <router-link to="/pet">
      <el-menu-item index="4">Pet</el-menu-item>
    </router-link>
    <div class="flex-grow"/>
    <router-link to="/settings">
      <el-menu-item index="-1" class="demo-type">{{ user }}
        <div>
          <el-avatar
              :src=userAvatar
          >Null
          </el-avatar>
        </div>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}

.demo-type {
  display: flex;
}

.demo-type > div {
  flex: 1;
  display: flex;
  vertical-align: middle;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: rgba(148, 156, 77, 0.1);
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: rgba(148, 156, 77, 1);
}

.el-menu-item.is-active {
  color: rgba(148, 156, 77, 0.8)
}
</style>

<script lang="ts" setup>
import {ref} from 'vue'
import {user, userAvatar} from '@/public/index.js'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>