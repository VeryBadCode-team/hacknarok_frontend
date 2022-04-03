<template>
  <div class="card">
    <div class="card__header">
      <div class="card__profile">
        <n-avatar
          size="large"
          :src="`https://hacknarok-api.verybadcode.pl/api/drive/uploads/${meeting.author.avatarId}`"
        />
        <n-p class="card__name">{{ meeting.author.firstName }}</n-p>
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
        <n-h3>{{ meeting.eventName }}</n-h3>
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
          src="@/assets/images/icons/person.svg"
          alt="Users account"
        />
        <n-p class="people-counter__number">1/{{ meeting.maxUsers }}</n-p>
      </div>
      <n-button type="primary">Dołącz</n-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, PropType, ref } from 'vue';
import { NP, NAvatar, NH3, NButton } from 'naive-ui';
import { Cords, Meeting } from '@/types';

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
  setup(props) {
    const cords = ref<Cords>({
      lang: 0,
      lat: 0,
    });

    const getLocation = (): Cords | null => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const crds = pos.coords;

          cords.value = {
            lat: crds.latitude,
            lang: crds.longitude,
          };
        },
        (err) => {
          console.log(err);
        },
      );
      return null;
    };

    onBeforeMount(() => getLocation());

    return { cords };
  },
});
</script>

<style lang="scss" src="./DCard.scss" scoped />
