<template>
  <div class="wrapper">
    <n-config-provider :theme-overrides="themeOverrides">
      <n-tabs default-value="login" size="large" justify-content="space-evenly">
        <n-tab-pane name="table" tab="Table">
          <v-table></v-table>
        </n-tab-pane>
        <n-tab-pane name="login" tab="Auth">
          <v-login></v-login>
        </n-tab-pane>
      </n-tabs>
    </n-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  NTabs,
  NTabPane,
  NConfigProvider,
  GlobalThemeOverrides,
} from 'naive-ui';
import VTable from './VTable.vue';
import VLogin from './VLogin.vue';

export default defineComponent({
  components: {
    NConfigProvider,
    VLogin,
    VTable,
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
