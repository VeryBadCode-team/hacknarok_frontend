<template>
  <div>
    <landing-page></landing-page>
    <cards></cards>
    <contact></contact>
    <footer-section></footer-section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LandingPage from './LandingPage/LandingPage.vue';
import Cards from './Cards/Cards.vue';
import Contact from './Contact/Contact.vue';
import FooterSection from './Footer/Footer.vue';

export default defineComponent({
  components: {
    LandingPage,
    Cards,
    Contact,
    FooterSection,
  },
});
</script>

<style lang="scss" src="./Wrapper.scss" />
