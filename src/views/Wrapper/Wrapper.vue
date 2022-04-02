<template>
  <div>
    <landing-page></landing-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LandingPage from './LandingPage/LandingPage.vue';

export default defineComponent({
  components: {
    LandingPage,
  },
});
</script>

<style lang="scss" src="./Wrapper.scss" />
