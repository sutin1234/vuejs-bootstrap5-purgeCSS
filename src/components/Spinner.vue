<template>
  <div>
    <div class="circle-spinner">
      <div v-for="item in spinnerList" :key="item" :class="item" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  data() {
    return {
      spinnerList: [
        'spinner-border text-primary',
        'spinner-border text-secondary',
        'spinner-border text-success',
        'spinner-border text-danger',
        'spinner-border text-warning',
        'spinner-border text-info',
        'spinner-border text-dark',
        'spinner-border text-light',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.circle-spinner {
  padding: 10px;
  .spinner-border {
    padding: 34px;
  }
}
</style>
