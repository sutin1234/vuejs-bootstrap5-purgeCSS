<template>
  <div class="about">
    <Button />
    <Spinner />
    <ProgressBar />
    <Alert />
  </div>
</template>
<script>
import Alert from '@/components/Alert.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import Spinner from '@/components/Spinner.vue';
import Button from '@/components/Button.vue';
export default {
  components: {
    Alert,
    ProgressBar,
    Spinner,
    Button,
  },
};
</script>

<style lang="scss">
</style>
