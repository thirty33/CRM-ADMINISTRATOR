<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import CustomTableComponent from "@/Components/CustomTableComponent.vue";
import CustomTablePagination from "@/Components/CustomTablePagination.vue";
import { Head } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";
import { TableInterface } from "@/Interfaces/tables";
import { useTranslation } from "@/Hooks/useTranslations";

const props = defineProps<TableInterface>();

const { translate } = useTranslation();

</script>

<template>
  <Head title="Module - List" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ translate("Module List") }}
      </h2>
    </template>
    <div class="shadow-md my-2 overflow-x-hidden">
      <div class="h-2/3">
        <CustomTableComponent
          :headers="props.headers"
          :data-items="props.dataItems"
        >
        </CustomTableComponent>
      </div>
      <div class="h-1/3 flex justify-center mt-4 pb-4">
        <CustomTablePagination :data-items="props.dataItems" />
      </div>
    </div>
  </AuthenticatedLayout>
</template>
