<script setup>

</script>

<template>
  <el-card class="card">
    <div class="box">
      <div class="avatar">
        <slot name="avatar"></slot>
      </div>
      <div class="text_box">
        <div class="name">
          <slot name="name"></slot>
        </div>
        <div class="text">
          <slot name="text"></slot>
        </div>
      </div>
    </div>
    <el-divider class="divider"></el-divider>
    <div class="detail">
      <slot name="detail"></slot>
    </div>
  </el-card>
</template>

<style scoped>
.card {
  margin: 30px;
  width: 50%;
  transition: all 0.2s;
}

.card:hover {
  margin: 20px;
  width: 53%;
  background-color: rgba(148, 156, 77, 0.5);
}

@media screen and (max-width: 1024px) {
  .card {
    width: 90%;
  }

  .card:hover {
    width: 92%;
  }
}

.divider {
  margin-top: 10px;
  margin-bottom: 20px;
}

.avatar {
  margin: 5px;
}

.detail {
  display: block;
  font-size: 16px;
}

.box {
  display: flex;
  align-items: center;
}

.text_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}

.text_box .name {
  font-size: 24px;
  font-weight: 600;
}

.text_box .text {
  font-size: 18px;
}
</style>