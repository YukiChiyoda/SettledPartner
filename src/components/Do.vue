<script setup>
import {ref} from 'vue'

const textarea = ref('')
const text = ref([])
</script>

<template>
  <div class="flex">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Assistant {{ $route.query.id }}</span>
        </div>
      </template>
      <div class="msgbox">
        <div
            v-for="i in text.length"
            :key="i"
            :class="{msg: true, left: i%2===0, right: i%2===1 }"
        >{{ text[i - 1] }}
        </div>
      </div>
      <el-divider/>
      <div class="typebox">
        <el-input
            v-model="textarea"
            :autosize="{ minRows: 1, maxRows: 4 }"
            type="input"
            placeholder="Please input here..."
            class="input"
        />
        <el-button
            type="info"
            class="button"
            @click="text.push(textarea); textarea = '';"
        >Submit
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.box-card {
  width: 50%;
}

.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-header span {
  font-size: 24px;
  font-weight: 600;
}

.msgbox {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  word-wrap: anywhere;
  overflow: hidden;
}

.msg {
  max-width: 60%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
}

.left {
  align-self: flex-start;
  background-color: rgba(48, 56, 77, 0.2);
  border-bottom-left-radius: 0;
}

.right {
  align-self: flex-end;
  background-color: rgba(148, 156, 77, 0.2);
  border-bottom-right-radius: 0;
}

.typebox {
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
}

.typebox .input {
  flex: 1;
  margin-right: 10px;
  word-wrap: anywhere;
  border: none;
}

.typebox .button {
  align-self: flex-end;
}

@media screen and (max-width: 1024px) {
  .box-card {
    width: 85%;
  }
}
</style>