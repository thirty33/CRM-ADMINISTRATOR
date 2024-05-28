<script setup lang="ts">
import _ from "lodash";

import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import CustomTextInputForm from "@/Components/CustomFormInputs/CustomTextInputForm.vue";

import { reactive, watch, inject } from "vue";
import { useForm, router, usePage } from "@inertiajs/vue3";
import { useTranslation } from "@/Hooks/useTranslations";


defineProps({ errors: Object });

const getPage = inject("getPageProgramatically") as ({}) => void;
const getQueryParams = inject("transformQueryParamsFromRoute") as () => {
  [key: string]: string;
};

let queryParams = getQueryParams();

const form = reactive({
  q: queryParams["Q"] ?? "",
});

function submit() {}

const debounceSearch = _.debounce(() => {
  getPage({
    q: form.q,
    page: 1,
  });
}, 1000);

watch(
  () => form.q,
  () => {
    debounceSearch();
  }
);
</script>

<template>
  <form
    @submit.prevent="submit"
    class="mt-6 space-y-6 bg-green-500 grid grid-cols-4 gap-0.5"
  >
    <CustomTextInputForm
      v-model="form.q"
      :errors="{}"
    />
    <!-- <div class="bg-blue-500">
      <InputLabel for="name" value="Name" />

      <TextInput
        id="name"
        type="text"
        class="mt-1 block w-full"
        v-model="form.q"
        required
        autofocus
        autocomplete="name"
      />

      <InputError class="mt-2" :message="errors?.name" />
    </div> -->
  </form>
</template>
