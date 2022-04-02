<template>
  <div>
    <landing-page></landing-page>
    <cards></cards>
    <contact></contact>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LandingPage from './LandingPage/LandingPage.vue';
import Cards from './Cards/Cards.vue';
import Contact from './Contact/Contact.vue';

export default defineComponent({
  components: {
    LandingPage,
    Cards,
    Contact,
  },
});
</script>

<style lang="scss" src="./Wrapper.scss" />
