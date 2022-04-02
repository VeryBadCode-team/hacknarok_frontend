<!-- @ts-ignore -->
<template>
  <div class="dashboard">
    <div class="dashboard__cards">cards...</div>
    <div class="dashboard__map">
      <l-map ref="map" :zoom="11" :max-zoom="maxZoom" :center="center">
        <div class="map-toolbox">
          <button @click="collapseMap">
            {{ isMapCollapsed ? 'Zwiń' : 'Rozwiń' }}
          </button>
        </div>
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-control-layers />
        <l-marker
          v-for="(marker, index) in subMarkers"
          :key="'sub-' + index"
          v-model:lat-lng="subMarkers[index]"
          :icon="subIcon"
          draggable
          @dragstart="(event) => onDragStartSub(index, event)"
          @dragend="() => onDragEndSub(index)"
          @drag="(event) => onDragSub(index, event)"
        >
        </l-marker>
        <l-polyline :lat-lngs="polylines"></l-polyline>
      </l-map>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import 'leaflet/dist/leaflet.css';
import {
  LMap,
  LPolyline,
  LTileLayer,
  LMarker,
  LControlLayers,
} from '@vue-leaflet/vue-leaflet';
import { icon } from 'leaflet';

export default {
  name: 'EditBusStopConnectionView',
  props: {
    from: Number,
    to: Number,
  },
  components: {
    LMap,
    LTileLayer,
    LPolyline,
    LMarker,
    LControlLayers,
  },
  data() {
    return {
      zoom: 16,
      maxZoom: 19,
      iconWidth: 25,
      iconHeight: 40,
      center: [50.01253, 20.99302],
      currentBusConnection: {},
      initialMarkers: [],
      markers: [],
      subMarkers: [],
      polylines: [],
      editedConnectionType: null,
      isLoading: true,
      actualEditedConnection: {
        busStopConnectionId: {
          fromBusStopId: {},
          toBusStopId: {},
        },
      },
      startIcon: icon({
        iconUrl: 'https://tarbus.pl/img/firstMapPoint.svg',
        iconSize: [10, 10],
      }),
      endIcon: icon({
        iconUrl: 'https://tarbus.pl/img/lastMapPoint.svg',
        iconSize: [10, 10],
      }),
      mainIcon: icon({
        iconUrl: 'https://tarbus.pl/img/nextMapPoint.svg',
        iconSize: [10, 10],
      }),
      subIcon: icon({
        iconUrl: 'https://tarbus.pl/img/mapPointSub.svg',
        iconSize: [10, 10],
      }),
      connectionsGridData: [],
      isMapCollapsed: true,
    };
  },
  methods: {
    onSelectionChanged() {},
    onGridConnectionUpdate(item) {
      const { model } = item;
      const currFromId =
        this.currentBusConnection.busStopConnectionId.fromBusStopId.id;
      const currToId =
        this.currentBusConnection.busStopConnectionId.toBusStopId.id;
      model.distance = item.values.distance;
      if (
        currFromId === model.busStopConnectionId.fromBusStopId.id &&
        currToId === model.busStopConnectionId.toBusStopId.id
      ) {
        this.currentBusConnection = model;
      }
      model.coordsList = null;
      this.updateConnectionInDatabase(model);
    },
    async onMapConnectionUpdate() {
      let data = '';
      this.markers.forEach((marker, index) => {
        data += `${marker.lng},${marker.lat}`;
        if (index < this.markers.length - 1) {
          data += ',';
        }
      });
      const connection = this.currentBusConnection;
      connection.distance = null;
      connection.coordsList = data;
      this.currentBusConnection = await this.updateConnectionInDatabase(
        connection,
      );
    },
    async updateConnectionInDatabase(connection) {
      const newConnection = await BusStopConnectionsDataService.update(
        connection,
      );
      this.refreshView();
      return newConnection;
    },
    onRowDelete(row) {
      BusStopConnectionsDataService.delete([row.model]).then(() => {
        this.connectionsGridData = [];
        this.refreshView();
      });
    },
    collapseMap() {
      this.isMapCollapsed = !this.isMapCollapsed;
    },
    removeMarker(index) {
      if (index !== 0 && index !== this.markers.length - 1) {
        this.markers.splice(index, 1);
        this.getVisibleMarkers();
        this.getPolylines();
      }
    },
    addMarker(event) {
      if (event.latlng != null) {
        this.markers.push(event.latlng);
      }
      this.getVisibleMarkers();
      this.getPolylines();
    },
    onDrag(index, event) {
      this.markers[index] = event.latlng;
      this.getVisibleMarkers();
      this.getPolylines();
    },
    onDragStartSub(index, event) {
      this.markers.splice(index + 1, 0, event.latlng);
    },
    onDragSub(index, event) {
      this.markers[index + 1] = event.latlng;
      this.getPolylines();
    },
    onDragEndSub(index) {
      this.subMarkers.splice(index, 1);
      this.getVisibleMarkers();
    },
    getPolylines() {
      this.polylines = this.markers.map((item) => [item.lat, item.lng]);
    },
    getVisibleMarkers() {
      const visibleMarkers = [];
      for (let i = 0; i < this.markers.length - 1; i += 1) {
        const firstMarker = this.markers[i];
        const secondMarker = this.markers[i + 1];
        const betweenMarker = this.getMarkerBetweenPoints(
          firstMarker,
          secondMarker,
        );
        visibleMarkers.push(betweenMarker);
      }
      this.subMarkers = visibleMarkers;
    },
    getMarkerBetweenPoints(start, end) {
      const subLat = (start.lat + end.lat) / 2;
      const subLng = (start.lng + end.lng) / 2;
      return [subLat, subLng];
    },
    isDraggable(index) {
      return index !== 0 && index !== this.markers.length - 1;
    },
    getIcon(index) {
      switch (index) {
        case 0:
          return this.startIcon;
        case this.markers.length - 1:
          return this.endIcon;
        default:
          return this.mainIcon;
      }
    },
    async fetchEmptyConnections() {
      this.isLoading = true;
      let connections = [];
      await BusStopConnectionsDataService.getEmptyConnections().then(
        (response) => {
          connections = response.data;
        },
      );
      if (connections.length === 0) {
        return false;
      }
      // eslint-disable-next-line prefer-destructuring
      this.actualEditedConnection = connections[0];
      this.setupConnectionsListOnGrid(connections);
      this.setUpMarkersByConnection();
      return true;
    },
    async fetchAllConnections() {
      this.isLoading = true;
      let connections = [];
      await BusStopConnectionsDataService.getAllConnections().then(
        (response) => {
          connections = response.data;
        },
      );
      // eslint-disable-next-line prefer-destructuring
      this.actualEditedConnection = connections[0];
      this.setupConnectionsListOnGrid(connections);
      this.setUpMarkersByConnection();
    },
    setupConnectionsListOnGrid(connectionsList) {
      const data = [];
      connectionsList.forEach((connection, index) => {
        data.push(this.getGridRowFromConnection(connection, index + 1));
      });
      this.connectionsGridData = [
        {
          data,
        },
      ];
    },
    setUpMarkersByConnection() {
      const connection = this.actualEditedConnection;
      if (connection.coordsList == null) {
        const firstMarker = {
          lat: connection.busStopConnectionId.fromBusStopId.lat,
          lng: connection.busStopConnectionId.fromBusStopId.lng,
        };
        const secondMarker = {
          lat: connection.busStopConnectionId.toBusStopId.lat,
          lng: connection.busStopConnectionId.toBusStopId.lng,
        };
        this.markers = [firstMarker, secondMarker];
        // TODO Reset map
        this.initialMarkers = [firstMarker, secondMarker];
      } else {
        const markers = [];
        const coordsList = connection.coordsList.split(',');
        for (let i = 0; i < coordsList.length - 1; i += 2) {
          markers.push({
            lat: parseFloat(coordsList[i + 1]),
            lng: parseFloat(coordsList[i]),
          });
        }
        this.markers = markers;
        this.initialMarkers = markers;
      }
      this.currentBusConnection = connection;
      this.getVisibleMarkers();
      this.getPolylines();
      this.isLoading = false;
    },
    getGridRowFromConnection(connection) {
      console.log(connection);
      const data = [];
      data.push({
        type: 'model',
        model: connection,
      });
      data.push({
        type: 'text',
        flex: 2,
        editable: false,
        label: 'FROM',
        key: 'fromBusStopId',
        value: connection.busStopConnectionId.fromBusStopId.name,
      });
      data.push({
        type: 'text',
        flex: 2,
        editable: false,
        label: 'TO',
        key: 'toBusStopId',
        value: connection.busStopConnectionId.toBusStopId.name,
      });
      data.push({
        type: 'text',
        flex: 2,
        editable: true,
        label: 'Dystans',
        key: 'distance',
        value: connection.distance,
      });
      data.push({
        type: 'action',
        flex: 1,
        label: 'Narzędzia',
        actions: [
          {
            icon: 'trash',
            onClick: this.onRowDelete,
          },
        ],
      });
      data.push({
        type: 'button',
        flex: 1,
        value: 'Edytuj trasę',
        onClick: this.onEditTrackPressed,
      });
      return data;
    },
    onEditTrackPressed(connection) {
      this.actualEditedConnection = connection.model;
      this.setUpMarkersByConnection();
    },
    async refreshView() {
      this.editedConnectionType = 'EMPTY_CONNECTIONS';
      if (!(await this.fetchEmptyConnections())) {
        this.editedConnectionType = 'ALL_CONNECTIONS';
        await this.fetchAllConnections();
      }
    },
  },
  mounted() {
    this.refreshView();
  },
};
</script>

<style lang="scss" src="./DPanel.scss" />
