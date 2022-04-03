<template>
  <div class="details container">
    <div class="details__head">
      <div class="details__header">
        <img
          src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="header"
        />
      </div>
      <div class="details__join">
        <n-h1>{{ eventDetails?.category.name }}</n-h1>
        <n-button type="primary" @click="joinEvent"> Dołącz teraz </n-button>
      </div>
      <div class="details__desc">
        <n-p> {{ eventDetails?.description }}</n-p>
      </div>
      <div class="details__more">
        <div class="details__more-box">
          <n-p>Organizator</n-p>
          <div class="organizator">
            <n-avatar
              size="large"
              :src="`https://hacknarok-api.verybadcode.pl/api/drive/uploads/${eventDetails.author.avatarId}`"
            />
            <div>
              <p>
                {{ eventDetails?.author.firstName }}
              </p>
              <p>
                {{ eventDetails?.author.lastName }}
              </p>
            </div>
          </div>
        </div>
        <div class="details__more-box">
          <n-p>Gdzie</n-p>
          Tarnów
        </div>
        <div class="details__more-box">
          <n-p>Kiedy</n-p>
          {{ new Date(eventDetails?.createdAt).toLocaleDateString('pl-PL') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NH1, NButton, NP, NAvatar } from 'naive-ui';
import MeetingService from '@/service/meeting/meeting.service';
import { MeetingDetails } from '@/types';
import { useMeeting } from '@/store/meeting';

export default defineComponent({
  components: {
    NH1,
    NP,
    NButton,
    NAvatar,
  },
  setup() {
    const meeting = useMeeting();
    const eventDetails = ref<MeetingDetails>();

    const fetchData = () => {
      MeetingService.getEventDetails(meeting.meeting.id).then((response) => {
        console.log(response.data);
        eventDetails.value = response.data;
      });
    };

    const joinEvent = () => {};

    return { fetchData, joinEvent, eventDetails };
  },

  beforeMount() {
    this.fetchData();
  },
});
</script>

<style lang="scss" src="./DDetails.scss" />
