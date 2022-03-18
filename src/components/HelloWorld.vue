<template>
  <div>
    {{ users }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '../store';

export default defineComponent({
  setup() {
    const store = useStore();
  
    const users = computed(() => store.users);

    return { users };
  },
});
</script>

<style scoped></style>
