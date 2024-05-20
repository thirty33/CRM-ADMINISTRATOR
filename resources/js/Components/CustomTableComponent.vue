<script setup lang="ts">
import { TableInterface } from '@/Interfaces/tables';
import HeadersTable from "@/Components/HeadersTable.vue";
import BodyTable from "@/Components/BodyTable.vue";

const props = defineProps<TableInterface>();
</script>

<template>
  <div class="relative sm:rounded-lg p-8 max-w-full w-screen md:max-w-full overflow-x-auto">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg"
    >
      <HeadersTable :headers="props.headers"></HeadersTable>
      <BodyTable
        :headers="props.headers"
        :data-items="props.dataItems">
      </BodyTable>
    </table>
  </div>
</template>
