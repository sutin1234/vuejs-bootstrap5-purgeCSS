<template>
  <div class="alert">
    <div v-for="item in alertList" :key="item">
      <div :class="item" role="alert">
        A simple {{ item  }} alert—check it out!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      alertList: [
        'alert alert-primary',
        'alert alert-secondary',
        'alert alert-success',
        'alert alert-danger',
        'alert alert-warning',
        'alert alert-info',
        'alert alert-dark',
        'alert alert-light',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
