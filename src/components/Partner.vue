<script setup>
import {ref} from 'vue'
import imageA from '@/assets/demo_a.png'
import imageB from '@/assets/demo_b.png'
const ifReverse  = ref(false)
</script>

<template>
  <el-card :body-style="{ padding: '0px', display: 'flex' }" class="outer">
  <img
      :src="ifReverse ? imageA :imageB"
      class="image_a"
      @click="ifReverse = !ifReverse"
  />
  <div class="aside">
    <div class="box">
      <el-card class="top" :body-style="{ padding: '5px' }">
        <img
            :src="ifReverse ? imageB :imageA"
            class="image_b"
            @click="ifReverse = !ifReverse"
        />
      </el-card>
    </div>
    <div class="bottom">
    </div>
  </div>
</el-card>
</template>

<style>
.outer{

}
.outer .image_a {
  display: block;
  width: 70%;
  object-fit: cover;
 }
.outer .aside{
  flex: 1;
  //background-color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.outer .aside .box{
  margin: 10px;
}
.outer .aside .box .image_b{
  display: block;
  width: 100%;
  object-fit: cover;
}
.outer .aside .bottom{
  flex: 1;
}
</style>