<template>
  <div class="filter">
    <div class="filter__input-wrapper">
      <img src="@/assets/images/icons/maginfier.svg" alt="magnifier" />
      <input v-model="filter" class="filter__input" placeholder="Search" />
    </div>
    <n-button type="primary" @click="toggleModal">Utwórz spotkanie</n-button>
    <Dialog v-model:visible="isModalOpen" header="Utwórz nowe spotkanie">
      Content
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NButton } from 'naive-ui';
import Dialog from 'primevue/dialog';

export default defineComponent({
  components: {
    Dialog,
    NButton,
  },
  setup() {
    const filter = ref('');
    const isModalOpen = ref(false);

    const toggleModal = () => {
      isModalOpen.value = true;
    };

    return { filter, isModalOpen, toggleModal };
  },
});
</script>

<style lang="scss" src="./DFilter.scss" scoped />
