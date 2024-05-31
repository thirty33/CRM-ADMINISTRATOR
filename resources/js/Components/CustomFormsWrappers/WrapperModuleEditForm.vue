<script setup lang="ts">
import _ from "lodash";
import { inject, computed } from "vue";
import { usePage, router } from "@inertiajs/vue3";

import CustomForm from '@/Components/CustomForm.vue';
import CustomTextInputForm from "@/Components/CustomFormInputs/CustomTextInputForm.vue";
import { InputFormBuilder, CustomisableForm } from "@/Classes/Forms";
import { Module } from "@/Interfaces/Module.ts";

const page = usePage();
const errors = computed(() => page.props.errors);

const props = defineProps<{
  module: Module
}>();

// const getPage = inject("getPageProgramatically") as ({}) => void;
// const getQueryParams = inject("transformQueryParamsFromRoute") as () => {
//   [key: string]: string;
// };

// let queryParams = getQueryParams();

const form = new CustomisableForm({
  ...props.module
});

form.inputFormList = [
  InputFormBuilder.instance
    .setLabel("Label")
    .setName("label")
    .setType("text")
    .setRequired(false)
    .setAutofocus(true)
    .setAutocomplete("label")
    .setError(errors.value?.label ?? "")
    .setFormProp("label")
    .setTypeInput(CustomTextInputForm)
    .getItem(),
  InputFormBuilder.instance
    .setLabel("Route")
    .setName("route")
    .setType("text")
    .setRequired(false)
    .setAutofocus(false)
    .setAutocomplete("route")
    .setError(errors.value?.route ?? "")
    .setFormProp("route")
    .setTypeInput(CustomTextInputForm)
    .getItem(),
  InputFormBuilder.instance
    .setLabel("Title")
    .setName("title")
    .setType("text")
    .setRequired(false)
    .setAutofocus(false)
    .setAutocomplete("title")
    .setError(errors.value?.title ?? "")
    .setFormProp("title")
    .setTypeInput(CustomTextInputForm)
    .getItem(),
  InputFormBuilder.instance
    .setLabel("Description")
    .setName("description")
    .setType("text")
    .setRequired(false)
    .setAutofocus(false)
    .setAutocomplete("description")
    .setError(errors.value?.description ?? "")
    .setFormProp("description")
    .setTypeInput(CustomTextInputForm)
    .getItem(),
];


function submit() {
  router.patch(route('module.update', props.module.id), form.formState)
}

</script>

<template>
  <div class="p-4">
    <CustomForm :form="form" :form_cols="2" :show_actions="true" @submit="submit"/>
  </div>
</template>
