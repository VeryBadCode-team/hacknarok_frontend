<template>
  <div>
    <w-landing-page></w-landing-page>
    <w-cards></w-cards>
    <w-contact></w-contact>
    <w-footer></w-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WLandingPage from './WLandingPage/WLandingPage.vue';
import WCards from './WCards/WCards.vue';
import WContact from './WContact/WContact.vue';
import WFooter from './WFooter/WFooter.vue';

export default defineComponent({
  components: {
    WLandingPage,
    WCards,
    WContact,
    WFooter,
  },
});
</script>

<style lang="scss" src="./HomeWrapper.scss" />
