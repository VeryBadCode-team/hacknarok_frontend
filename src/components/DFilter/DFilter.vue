<template>
  <div class="filter">
    <div class="filter__input-wrapper">
      <img src="@/assets/images/icons/maginfier.svg" alt="magnifier" />
      <input v-model="filter" class="filter__input" placeholder="Search" />
    </div>
    <n-button type="primary">Utwórz spotkanie</n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NButton } from 'naive-ui';

export default defineComponent({
  components: {
    NButton,
  },
  setup() {
    const filter = ref('');
    return { filter };
  },
});
</script>

<style lang="scss" src="./DFilter.scss" scoped />
