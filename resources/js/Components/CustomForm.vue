<script setup lang="ts">
import _ from "lodash";

import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import CustomTextInputForm from "@/Components/CustomFormInputs/CustomTextInputForm.vue";
import { InputForm } from "@/Classes/Forms";

import { reactive, watch, inject, computed, ref } from "vue";
import { useForm, router, usePage } from "@inertiajs/vue3";
import { useTranslation } from "@/Hooks/useTranslations";

const page = usePage();
const errors = computed(() => page.props.errors)

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

const input: InputForm = {
  labelName: "Search",
  inputName: "search",
  inputType: "text",
  required: false,
  autofocus: true,
  autocomplete: "search",
  error: errors.value?.q ?? '',
  formProp: 'q',
  typeInput: CustomTextInputForm
};

const InputForms: InputForm[] = [
  input
];

</script>

<template>
  <form
    @submit.prevent="submit"
    class="mt-6 space-y-6 grid grid-cols-4 gap-x-0.5"
  >
    <component
      v-for="input in InputForms"
      :is="input.typeInput"
      :key="input.inputName"
      :input="input"
      :prop="input.formProp"
      v-model="form"
    />
  </form>
</template>
