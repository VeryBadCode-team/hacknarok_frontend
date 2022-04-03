<template>
  <div class="filter">
    <div class="filter__input-wrapper">
      <img src="@/assets/images/icons/maginfier.svg" alt="magnifier"/>
      <input v-model="filter" class="filter__input" placeholder="Search"/>
    </div>
    <n-button type="primary" @click="toggleModal">Utwórz spotkanie</n-button>
    <Dialog v-model:visible="isModalOpen" header="Utwórz nowe spotkanie">
      <input v-model="name" placeholder="Imię i nazwisko" disabled/>
      <n-dropdown children="categories" v-model="category" placeholder="Kategoria" disabled/>

    </Dialog>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {NButton, NCheckbox, NDropdown, NForm, NFormItem, NH1, NH2, NInput, NP} from 'naive-ui';
import Dialog from 'primevue/dialog';
import MeetingService from "@/service/meeting/meeting.service";

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
    const category = ref();
    const categories = ref([]);

    const filter = ref('');
    const isModalOpen = ref(false);

    const toggleModal = () => {
      isModalOpen.value = true;
    };

    const initDropdownData = () => {
       MeetingService.getMeetingCategories().then(response => {
         categories.value = response.data;
       });
    }

    return {filter, isModalOpen, toggleModal, name, initDropdownData,categories, category};
  },
  beforeMount() {
    this.initDropdownData();
  }
});
</script>

<style lang="scss" src="./DFilter.scss" scoped/>
