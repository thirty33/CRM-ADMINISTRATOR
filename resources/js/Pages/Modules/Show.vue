<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import WrapperModuleEditForm from "@/Components/CustomFormsWrappers/WrapperModuleEditForm.vue";
import { Head, usePage } from "@inertiajs/vue3";
import { useTranslation } from "@/Hooks/useTranslations";
import { Module } from "@/Interfaces/Module.ts";


const props = defineProps<{
  module: Module
}>();

const { translate } = useTranslation();

</script>

<template>
  <Head title="Module - Edit" />
  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ translate("Edit Module") }}
      </h2>
    </template>
    <div class="shadow-md my-2 overflow-x-hidden">
      <WrapperModuleEditForm :module="props.module"/>
    </div>
  </AuthenticatedLayout>
</template>
