<template>
  <div class="wrapper">
    <n-config-provider :theme-overrides="themeOverrides">
      <n-tabs default-value="register" size="large" justify-content="space-evenly">
        <n-tab-pane name="register" tab="Register">
          <router-link to="/signup">
            <n-button type="primary"> User auth demo </n-button>
          </router-link>
        </n-tab-pane>
        <n-tab-pane name="login" tab="Login">
          <router-link to="/login">
            <n-button type="primary"> User auth demo </n-button>
          </router-link>
        </n-tab-pane>
      </n-tabs>
    </n-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  NButton,
  NTabs,
  NTabPane,
  NConfigProvider,
  GlobalThemeOverrides,
} from 'naive-ui';

export default defineComponent({
  components: {
    NButton,
    NConfigProvider,
    NTabs,
    NTabPane,
  },
  setup() {
    const themeOverrides: GlobalThemeOverrides = {
      common: {
        // primaryColor: '#FF0000',
      },
    };

    return { themeOverrides };
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  padding: 1rem 3rem;
}
</style>
