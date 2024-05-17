<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import SideBarVue from "@/Components/SideBar.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
  <Head title="Module - List" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Module List</h2>
    </template>
    <div>
        Hola
    </div>
  </AuthenticatedLayout>
</template>
