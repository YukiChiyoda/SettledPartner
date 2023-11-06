<script setup>
import {ref} from "vue";

const curImg = ref(1)
</script>

<template>
  <el-container>
    <el-aside width="100px">
      <div class="menu">
        <el-row>
          <el-col :span="24" v-for="i in 10" :key="i">
            <div class="item" @click="curImg = i">
              <img :src="'/src/assets/pets/'+i+'.png'" :alt="i"/>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-aside>
    <el-main>
      <div class="pet">
        <div class="status">
          <el-progress
              :percentage="85"
              :stroke-width="15"
              striped
              striped-flow
              :duration="10"
              style="width: 200px"
              color="rgba(148, 156, 77, 0.8)"
          />
        </div>
        <div class="face">
          <img :src="'/src/assets/pets/'+curImg+'.png'" :alt="curImg"/></div>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.menu {
  align-self: flex-start;
}

.pet {
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item {
  border-radius: 10px;
  text-align: center;
  border: solid 1px rgba(148, 156, 77, 0.5);
  cursor: pointer;
  transition: all 0.2s;
  margin: 5px;
}

.item:hover {
  background-color: rgba(148, 156, 77, 0.5);
}

.item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.face img {
  width: 300px;
  height: 300px;
}
</style>