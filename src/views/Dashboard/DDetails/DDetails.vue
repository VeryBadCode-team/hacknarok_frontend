<template>
  <div class="details container">
    <div class="details__head">
      <div class="details__header">
        <img
            src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="header"
        />
      </div>
      <n-h1>Main header as sieasdas</n-h1>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {NH1} from 'naive-ui';
import MeetingService from "@/service/meeting/meeting.service";
import {Meeting, MeetingDetails} from "@/types";

export default defineComponent({
  components: {
    NH1,
  },
  setup() {
    const eventDetails = ref<MeetingDetails>();

    const fetchData = () => {
      MeetingService.getEventDetails(/*TUTAJ PROPSA*/).then(response => {
        console.log(response.data);
        eventDetails.value = response.data;
      });
    }

    return {fetchData,};
  },

  beforeMount() {
    this.fetchData();
  }
});
</script>

<style lang="scss" src="./DDetails.scss"/>
