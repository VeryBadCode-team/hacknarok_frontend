<template>
  <header class="header">
    <router-link to="/">
      <img src="@/assets/logo.svg" alt="logo" />
    </router-link>
    <nav class="header__nav">
      <n-p>Home</n-p>
      <n-p>Projects</n-p>
      <n-p>Career</n-p>
      <n-p>About</n-p>
      <n-p>Contact</n-p>
      <n-button type="primary" :ghost="!isPrimary" @click="handleBtnClick"
        >Sign In</n-button
      >
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { NP, NButton } from 'naive-ui';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  components: {
    NP,
    NButton,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const handleBtnClick = () => router.push('/login');

    const isPrimary = computed(() => route.path !== '/login');

    return { isPrimary, handleBtnClick };
  },
});
</script>

<style lang="scss" src="./VHeader.scss" />
