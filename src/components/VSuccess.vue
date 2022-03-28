<template>
  <div class="auth">
    <n-h1>{{ `${user.email}: ${user.firstName} ${user.lastName}` }}</n-h1>
    <n-p>This is only visible for authenticated users</n-p>
    <n-button type="primary" @click="handleLogout"> Logout </n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, NP, NH1 } from 'naive-ui';
import { useAuth } from '../store/auth';
import { storeToRefs } from 'pinia';

export default defineComponent({
  components: {
    NButton,
    NP,
    NH1,
  },
  setup() {
    const store = useAuth();

    const { user } = storeToRefs(store);

    const handleLogout = () => {
      store.logout();
    };

    return { user, handleLogout };
  },
});
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}
</style>
