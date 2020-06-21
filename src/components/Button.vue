<template>
  <div>
    <div class="button-cover">
      <button
        type="button"
        v-for="(item, index) in buttonList"
        :key="index"
        :class="item">
        Primary
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      buttonList: [
        'btn btn-primary',
        'btn btn-secondary',
        'btn btn-success',
        'btn btn-danger',
        'btn btn-warning',
        'btn btn-info',
        'btn btn-light',
        'btn btn-dark',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
