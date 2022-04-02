<template>
  <div class="card">
    <div class="card__header">
      <div class="card__profile">
        <n-avatar
          size="large"
          src="https://bi.im-g.pl/im/15/b7/15/z22769941AMP,Shrek.jpg"
        />
        <n-p>Joanna</n-p>
        <div class="card__start">starts</div>
        <div class="card__distance">disntance</div>
      </div>
      <div class="card__highlighted">wyroznione</div>
    </div>
    <div class="card__body">
      <div class="card__headline">
        <n-h3>Bieganie w parku</n-h3>
        <div class="pin">
          <img src="@/assets/images/icons/running.svg" alt="running" />
        </div>
      </div>
      <n-p>Lorem ipsum dolor sit amet, consectetur asdegd adipiscing elit.</n-p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NP, NAvatar, NH3 } from 'naive-ui';
import { Meeting } from '@/types';

export default defineComponent({
  components: {
    NP,
    NH3,
    NAvatar,
  },
  props: {
    meeting: {
      type: Object as PropType<Meeting>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" src="./DCard.scss" scoped />
