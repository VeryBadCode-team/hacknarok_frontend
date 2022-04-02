<template>
  <div>
    <d-card></d-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DCard from '@/components/DCard/DCard.vue';

export default defineComponent({
  components: {
    DCard,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
