<template>
  <div class="filter">
    <div class="filter__input-wrapper">
      <img src="@/assets/images/icons/maginfier.svg" alt="magnifier"/>
      <input v-model="filter" class="filter__input" placeholder="Search"/>
    </div>
    <n-button type="primary" @click="toggleModal">Utwórz spotkanie</n-button>
    <Dialog
        v-model:visible="isModalOpen"
        header="Utwórz nowe spotkanie"
        class="modal"
    >
      <div class="invite">
        <div class="invite__left">
          <input v-model="name" placeholder="Imię i nazwisko" disabled/>
          <select v-model="selectedOption">
            <option v-for="option in categories" :value="option">
              {{ option.name }}
            </option>
          </select>
          <textarea v-model="description" placeholder="Opis spotkania"/>
        </div>
        <div class="invite__right">
          <input v-model="maxUsers" type="number" placeholder="Liczba uczestników"/>
          <p>
            Twoje ogłoszenie będzie ważne przez 24 godziny.<br />
            Po tym czasie przejedzie do archiwum.<br /><br />
            Możesz wydłużyć czas zamówienia <a href="">tutaj</a>
          </p>
        </div>
      </div>
      <button @click="createMeeting" class="invite__button">Utwórz wydarzenie</button>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {NButton, NCheckbox, NDropdown, NForm, NFormItem, NH1, NH2, NInput, NP,} from 'naive-ui';
import Dialog from 'primevue/dialog';
import MeetingService from '@/service/meeting/meeting.service';
import {Coords, CreateMeetingRequest} from "@/types";

export default defineComponent({
  components: {
    Dialog,
    NButton,
    NDropdown,
    NForm,
    NCheckbox,
    NFormItem,
    NH1,
    NH2,
    NInput,
    NP,
  },
  setup() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);

    const name = ref(`${currentUser.firstName} ${currentUser.lastName}`);
    const description = ref('');
    const maxUsers = ref(1);
    const categories = ref([]);
    const selectedOption = ref();

    const filter = ref('');
    const isModalOpen = ref(false);

    const coords = ref<Coords>({
      lng: 0,
      lat: 0,
    });

    const toggleModal = () => {
      isModalOpen.value = true;
    };

    const initDropdownData = () => {
      MeetingService.getMeetingCategories().then((response) => {
        categories.value = response.data;
      });
    };

    const createMeeting = () => {
      console.log(selectedOption.value);
      const createUserRequest : CreateMeetingRequest = {
        name: name.value,
        categoryId: selectedOption.value.id,
        description: description.value,
        maxUsers: maxUsers.value,
        type: 'user',
        lat: coords.value.lat,
        lng: coords.value.lng,
      };

      console.log(createUserRequest);

      MeetingService.createMeeting(createUserRequest).then((response) => {
        console.log(`created meeting - ${response.data}`);
      });
    }

    const getLocation = (): Coords | null => {
      navigator.geolocation.getCurrentPosition(
          (pos) => {
            const crds = pos.coords;
            coords.value = {
              lat: crds.latitude,
              lng: crds.longitude,
            };
          },
          (err) => {
            console.log(err);
          },
      );
      return null;
    };


    return {
      filter,
      isModalOpen,
      description,
      getLocation,
      toggleModal,
      selectedOption,
      name,
      initDropdownData,
      categories,
      maxUsers,
      createMeeting,
    };
  },
  beforeMount() {
    this.getLocation();
    this.initDropdownData();
  },
});
</script>

<style lang="scss" src="./DFilter.scss" scoped/>
