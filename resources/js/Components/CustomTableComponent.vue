<script setup lang="ts">
import { TableInterfaceDataListDto } from "@/Interfaces/tables";
import HeadersTable from "@/Components/HeadersTable.vue";
import BodyTable from "@/Components/BodyTable.vue";

const props = defineProps<TableInterfaceDataListDto>();

</script>

<template>
  <div
    class="relative sm:rounded-lg p-8 max-w-full w-screen md:max-w-full overflow-x-auto"
  >
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg"
    >
      <HeadersTable :headers="props.headers"></HeadersTable>
      <BodyTable
        :headers="props.headers"
        :data-items="props.dataItems"
        @delete-item="(id) => $emit('deleteItem', id)">
      </BodyTable>
    </table>
    <div
      v-if="props.dataItems.data.length < 1"
      class="flex justify-center items-center bg-white p-4 py-8">
      There are no items in the list
    </div>
  </div>
</template>
