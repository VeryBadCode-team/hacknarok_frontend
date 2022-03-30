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
        primaryColorHover: '#e2355e'
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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

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

  // FONTS
  --primary-header: 600 5.6rem 'Lato', sans-serif;
  --secondary-header: 400 3.2rem 'Lato', sans-serif;
  --tertiary-header: 700 2rem 'Lato', sans-serif;
  --base-font: 300 1.6rem/150% 'Lato', sans-serif;
  --base-font-bold: 600 1.6rem 'Lato', sans-serif;
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
.n-h1 {
  margin: 0;
}

</style>
