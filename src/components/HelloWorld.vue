<template>
  <div class="wrapper">
      <n-tabs
        default-value="table"
        size="large"
        justify-content="space-evenly"
      >
        <n-tab-pane name="table" tab="Table">
          <v-table></v-table>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="Auth"> card 2 </n-tab-pane>
      </n-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NTabs, NTabPane } from 'naive-ui';
import VTable from './VTable.vue'

export default defineComponent({
  components: {
    VTable,
    NTabs,
    NTabPane,
  },
  setup() {
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  padding: 1rem 3rem;
}
</style>
