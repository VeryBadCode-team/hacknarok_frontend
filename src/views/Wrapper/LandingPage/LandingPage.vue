<template>
  <div class="container landing-page">
    <div class="landing-page__wrapper">
      <div class="landing-page__text">
        <n-h1 class="primary-header"
          >Primary header Lorem ipsum dolor sit amet consectetur.
        </n-h1>
        <n-p class="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          quia obcaecati libero impedit doloremque dolor dignissimos, at,
          aperiam ab repellendus eveniet quasi repudiandae, animi quidem illum
          maiores sequi veritatis aspernatur!
        </n-p>
        <n-button>Start now</n-button>
      </div>

      <img
        class="landing-page__img"
        src="src\assets\ignacio-brosa-vJDbPuxUS_s-unsplash.jpg"
        alt="park"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NH1, NP, NButton } from 'naive-ui';

export default defineComponent({
  components: {
    NH1,
    NP,
    NButton,
  },
});
</script>

<style lang="scss" src="./LandingPage.scss" />
