<template>
  <n-config-provider :theme-overrides="theme">
    <router-view></router-view>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { useAuth } from '@/store/auth';
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui';

export default defineComponent({
  components: {
    NConfigProvider,
  },
  setup() {
    const store = useAuth();

    const theme: GlobalThemeOverrides = {
      common: {
        primaryColor: '#ef476f',
        primaryColorHover: '#e2355e',
      },
    };

    onBeforeMount(() => {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        store.user = JSON.parse(currentUser);
      }
    });
    return { theme };
  },
});
</script>

<style lang="scss">
:root {
  // COLORS
  --color-primary: #ef476f;
  --color-primary-dark: #e2355e;
  --color-light: #ffffff;
  --color-dark: #18181b;
  --color-gray-dark: #868686;
  --color-gray-light: #e7e7e7;

  // SPACING
  --base-size: 0.8rem;

  // OTHERS
  --shadow-light: rgba(181, 186, 192, 0.2) 0px 8px 24px
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
}

// Global styles

.n-p,
.n-h1,
.n-button {
  margin: 0;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.Vue-Toastification__toast--info.custom_toast {
  background-color: #29b6f6;
  border: 1px solid #1795cf;
}

.Vue-Toastification__toast--success.custom_toast {
  background-color: #66bb6a;
  border: 1px solid #3ea043;
}

.Vue-Toastification__toast--error.custom_toast {
  background-color: #e57373;
  border: 1px solid #da6060;
}

.custom_toast {
  .Vue-Toastification__toast-body {
    min-width: 200px;
    font-size: 1.4rem;
    font-family: v-sans, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
}
</style>
