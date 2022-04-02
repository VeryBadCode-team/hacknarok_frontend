<template>
  <header class="header">
    <router-link to="/">
      <div class="header__logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
        <n-p>JoinMe</n-p>
      </div>
    </router-link>
    <nav class="header__nav">
      <n-p>O nas</n-p>
      <n-p>Jak zacząć</n-p>
      <n-p>Kontakt</n-p>
      <n-button
        type="primary"
        :class="{ header__button: !isPrimary }"
        :ghost="!isPrimary"
        @click="handleBtnClick"
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

<style lang="scss" src="./VHeader.scss" scoped />
