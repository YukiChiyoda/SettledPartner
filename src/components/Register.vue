<script setup>
import RegItem from './RegItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import {ref} from "vue";
const name = ref('');
const school = ref('');
const major = ref('');
const checkList = ref([])
const time = ref([0, 0, 23, 59])
import {user, userAvatar} from '@/public/index.js'
import {ElMessage} from "element-plus";
import router from "@/router";
const submit = () => {
  user.value = name.value + "(10001)";
  userAvatar.value = "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png";
  ElMessage({
    message: 'Congrats, your register has been passed!',
    type: 'success',
  })
  router.push('/home');
}
</script>

<template>
  <div class="title">
    Welcome to us!<br />Take 5 steps to register!
  </div>

  <RegItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Name</template>
    We need your name to better understand you!
    <template #input>
      <el-input v-model="name" placeholder="" class="input" />
    </template>
  </RegItem>

  <RegItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>School</template>
    Over 100'000 students from different schools have been our members! You'll not be the last!
    <template #input>
      <el-input v-model="school" placeholder="" class="input" />
    </template>
  </RegItem>

  <RegItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Major</template>
    Tell us your major. We'll find a suitable partner with you.
    <template #input>
      <el-input v-model="major" placeholder="" class="input" />
    </template>
  </RegItem>

  <RegItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Characters</template>
    Find your tags below to describe you!
    <template #input>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="ENTP" />
        <el-checkbox label="INFP" />
        <el-checkbox label="ESTJ" />
        <el-checkbox label="ESFJ" />
        <el-checkbox label="Music" />
        <el-checkbox label="Reading" />
        <el-checkbox label="Travelling" />
      </el-checkbox-group>
    </template>
  </RegItem>

  <RegItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Time</template>
    Take a time table and start just now!
    <template #input>
      <div class="line">
        Start Time:
        <el-input-number v-model="time[0]" :min="0" :max="23" class="time"/>:
        <el-input-number v-model="time[1]" :min="0" :max="59" class="time"/>
      </div>
      <div class="line">
      End Time:
      <el-input-number v-model="time[2]" :min="0" :max="23" class="time"/>:
      <el-input-number v-model="time[3]" :min="0" :max="59" class="time"/>
      </div>
    </template>
  </RegItem>

  <div class="title">
    <el-button class="button" @click="submit">Submit</el-button>
  </div>
</template>

<style>
.title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  margin: 1.5rem;
  color: var(--color-heading);
}
.time{
  margin-left: 10px;
  width: 120px;
}
.line {
  margin-top: 15px;
  font-weight: 600;
}
.button{
  text-align: center;
}
</style>