<template>
  <div class="container landing-page">
    <div class="landing-page__wrapper">
      <div class="landing-page__text">
        <n-h1>Juz dziś spotkajmy się w nowej rzeczywistości </n-h1>
        <n-p class="description">
          Dzięki naszej aplikacji zoorganizujesz własne wydarzenia, poznasz nowe
          twarze oraz będziesz miał okazje robić to wszystko przy okazji
          ciekawych aktywości
        </n-p>

        <n-button type="primary" @click="handleBtnClick"
          >Zorganizuj spotkanie</n-button
        >
      </div>

      <img
        class="landing-page__img"
        src="@/assets/images/main.jpg"
        alt="park"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NH1, NP, NButton } from 'naive-ui';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    NH1,
    NP,
    NButton,
  },
  setup() {
    const router = useRouter();

    const handleBtnClick = () => router.push('/login');

    return { handleBtnClick };
  },
});
</script>

<style lang="scss" src="./WLandingPage.scss" />
