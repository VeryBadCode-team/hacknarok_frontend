<!-- @ts-ignore -->
<template>
  <div class="dashboard">
    <div class="dashboard__cards">
      <d-cards></d-cards>
    </div>
    <div class="dashboard__map">
      <l-map ref="map" :zoom="11" :max-zoom="map.maxZoom" :center="map.center">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-control-layers />
        <l-marker
          v-for="(marker, index) in map.markers"
          :key="'marker-' + index"
          v-model:lat-lng="map.markers[index]"
          :icon="runningIcon"
        >
          <l-popup>
            <div class="marker-popup">
              <div class="marker-popup__title">
                <span>{{ marker.title }}</span>
              </div>
              <div class="marker-popup__content">
                <span>{{ marker.content }}</span>
              </div>
            </div>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import 'leaflet/dist/leaflet.css';
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LControlLayers,
} from '@vue-leaflet/vue-leaflet';
import { icon } from 'leaflet';
import DCards from './DCards/DCards.vue';
import MeetingService from '@/service/meeting/meeting.service';
import { Meeting } from '@/types';

export default defineComponent({
  name: 'EditBusStopConnectionView',
  components: {
    DCards,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LControlLayers,
  },
  setup() {
    const meetings = ref<Meeting[]>([]);
    // unused var
    const isLoading = ref(false);

    const map = {
      zoom: 16,
      maxZoom: 19,
      center: [50.01253, 20.99302],
      markers: [],
    };

    const runningIcon = ref(
      icon({
        iconUrl:
          'https://hacknarok-api.verybadcode.pl/api/drive/uploads/c92b384c-65c0-4159-a242-55d7ff33ca61',
        iconSize: [40, 40],
      }),
    );

    const fetchData = () => {
      MeetingService.getAllEvents().then((response) => {
        meetings.value = response.data;
      });
    };

    onBeforeMount(() => {
      fetchData();
    });

    return {
      runningIcon,
      map,
    };
  },
});
</script>

<style lang="scss" src="./DPanel.scss" />
