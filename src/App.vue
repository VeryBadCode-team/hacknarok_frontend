<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from './store';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    store.getUsers();

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
