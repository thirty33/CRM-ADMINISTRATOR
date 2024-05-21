<script setup lang="ts">
import { TableInterfaceDataListDto } from "@/Interfaces/tables";
import { Link } from "@inertiajs/vue3";

const props = defineProps<TableInterfaceDataListDto>();
</script>

<template>
  <tbody>
    <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      v-for="(item, index) in dataItems.data"
      :key="index"
    >
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {{ item[headers[0].columnProp] }}
      </th>
      <td
        class="px-6 py-4"
        v-for="header in headers.slice(1)"
        :key="header.title"
      >
        {{ item[header.columnProp] }}
      </td>
      <td class="px-6 py-4 lg:text-right flex flex-col text-left lg:items-center lg:flex-row justify-between">
        <Link
          href="#"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >Edit
        </Link>
        <div
          class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >Delete
        </div>
      </td>
    </tr>
  </tbody>
</template>
