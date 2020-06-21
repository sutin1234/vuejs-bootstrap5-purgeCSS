<template>
  <div>
    <div class="progress" v-for="(item, index) in progressList" :key="index">
      <div
        :class="item.style"
        role="progressbar"
        :style="{ width: item.width }"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data() {
    return {
      progressList: [
        { width: '20%', style: 'progress-bar bg-success' },
        { width: '30%', style: 'progress-bar bg-info' },
        { width: '40%', style: 'progress-bar bg-warning' },
        { width: '50%', style: 'progress-bar bg-danger' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.progress {
  margin: 5px;
}
</style>
