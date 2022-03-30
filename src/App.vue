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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

:root {
  // COLORS
  --color-primary: #ef476f;
  --color-primary-dark: #e2355e;
  --color-light: #FFFFFF;
  --color-dark: #18181B;
  --color-gray-dark: #868686;
  --color-gray-light: #E7E7E7;

  // SPACING
  --base-size: 0.8rem;
  
  // FONTS
  --primary-header: 600 5.6rem 'Lato', sans-serif;;
  --secondary-header: 400 3.2rem 'Lato', sans-serif;;
  --tertiary-header: 700 2rem 'Lato', sans-serif;;
  --base-font: 300 1.6rem/150% 'Lato', sans-serif;;
  --base-font-bold: 600 1.6rem 'Lato', sans-serif;;
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
}

// Global styles

</style>
