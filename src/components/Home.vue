<script setup>
const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Schedule 1</span>
              <el-button class="button" text>Deal It</el-button>
            </div>
          </template>
          <div v-for="o in 2" :key="o" class="text item">{{ 'Description Line ' + o }}</div>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Schedule 2</span>
              <el-button class="button" text>Deal It</el-button>
            </div>
          </template>
          <div v-for="o in 2" :key="o" class="text item">{{ 'Description Line ' + o }}</div>
        </el-card>
      </el-aside>
      <el-main>
        <h1>To Do List</h1>
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}
</style>
