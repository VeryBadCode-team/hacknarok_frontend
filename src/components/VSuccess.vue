<template>
  <h1>{{ `${user.email}: ${user.firstName} ${user.lastName}` }}</h1>
  <p>this is only visible for authenticated users</p>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '../store';

export default defineComponent({
  setup() {
    const store = useStore();

    const user = computed(() => store.user);

    return { user };
  },
});
</script>
