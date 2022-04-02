<template>
  <div class="container cards">
    <n-h2 class="secondary-heading">Kilka słów o nas</n-h2>
    <div class="cards__list">
      <div class="card">
        <img
          class="card__icon"
          src="@/assets/images/icons/location-outline.svg"
        />
        <n-h2>Miejsca</n-h2>
        <n-p>W łatwy sposób znajdź miejsce na spotkanie</n-p>
      </div>
      <div class="card">
        <img
          class="card__icon"
          src="@/assets/images/icons/people-outline.svg"
        />
        <n-h2>Spotkania</n-h2>
        <n-p>Zorganizuj spotkanie biznesowe lub w gronie przyjaciół</n-p>
      </div>
      <div class="card">
        <img
          class="card__icon"
          src="@/assets/images/icons/chatbubbles-outline.svg"
        />
        <n-h2>Komunikacja</n-h2>
        <n-p>Wspólnie ustalcie szczegóły spotkania za pomocą czatu</n-p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NH1, NH2, NIcon, NP, NButton } from 'naive-ui';

export default defineComponent({
  components: {
    NH1,
    NH2,
    NIcon,
    NP,
    NButton,
  },
});
</script>

<style lang="scss" src="./Cards.scss" />
