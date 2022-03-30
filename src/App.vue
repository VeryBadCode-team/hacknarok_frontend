<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { useAuth } from '@/store/auth';

export default defineComponent({
  setup() {
    const store = useAuth();

    onBeforeMount(() => {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        store.user = JSON.parse(currentUser);
      }
    });
    return {};
  },
});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
