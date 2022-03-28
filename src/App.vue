<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from './store';

export default defineComponent({
  setup() {
    const store = useStore();
    store.getUsers();

    // get user from localStorage in onBeforeMount
    // set this user in store
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
