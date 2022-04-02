<template>
  <div class="card">
    <div class="card__header">
      <div class="card__profile">
        <n-avatar
          size="large"
          src="https://bi.im-g.pl/im/15/b7/15/z22769941AMP,Shrek.jpg"
        />
        <n-p class="card__name">Joanna</n-p>
        <div class="card__stars">
          <div class="card__icon">
            <img src="@/assets/images/icons/star.svg" alt="star" />
          </div>
          <div class="card__icon">
            <img src="@/assets/images/icons/star.svg" alt="star" />
          </div>
          <div class="card__icon">
            <img src="@/assets/images/icons/star.svg" alt="star" />
          </div>
          <div class="card__icon">
            <img src="@/assets/images/icons/star.svg" alt="star" />
          </div>
          <div class="card__icon">
            <img src="@/assets/images/icons/star.svg" alt="star" />
          </div>
        </div>
        <div class="card__distance">3 kilometry stąd</div>
      </div>
      <div class="card__highlighted">
        <div class="card__icon">
          <img src="@/assets/images/icons/star.svg" alt="star" />
        </div>
        <n-p class="card__text">Wyróżnione</n-p>
      </div>
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
    <div class="card__footer">
      <div class="people-counter">
        <img
          class="people-counter__icon"
          src="src\assets\images\icons\person.svg"
          alt="Users account"
        />
        <n-p class="people-counter__number">1/2</n-p>
      </div>
      <n-button type="primary">Dołącz</n-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NP, NAvatar, NH3, NButton } from 'naive-ui';
import { Meeting } from '@/types';

export default defineComponent({
  components: {
    NP,
    NH3,
    NAvatar,
    NButton,
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
