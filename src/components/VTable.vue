<template>
  <n-data-table
    :bordered="false"
    :single-line="false"
    :columns="columns"
    :data="users"
    :pagination="pagination"
  />
</template>

<script lang="ts">
import { computed, defineComponent, h } from 'vue';
import { NDataTable, NButton } from 'naive-ui';
import { useStore } from '../store';

export default defineComponent({
  components: {
    NDataTable,
  },
  setup() {
    const store = useStore();

    const users = computed(() =>
      store.users.map((user) => ({
        key: user.id.value,
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
        email: user.email,
        age: user.dob.age,
        picture: user.picture.thumbnail,
        location: user.location.city,
      })),
    );

    const createColumns = ({ sendMail }) => {
      return [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Gender',
          key: 'gender',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Location',
          key: 'location',
        },
        {
          title: 'Email',
          key: 'email',
        },
        {
          title: 'Action',
          key: 'actions',
          render(row) {
            return h(
              NButton,
              {
                size: 'small',
                onClick: () => sendMail(row),
              },
              { default: () => 'Send Email' },
            );
          },
        },
      ];
    };

    return {
      users,
      columns: createColumns({
        sendMail(rowData) {
          console.log('send mail to ' + rowData.name);
        },
      }),
      pagination: {
        pageSize: 5,
      },
    };
  },
});
</script>

<style scoped></style>
