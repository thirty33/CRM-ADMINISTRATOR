<script setup lang="ts">
import _ from "lodash";
import { inject, computed } from "vue";
import { usePage } from "@inertiajs/vue3";

import CustomForm from '@/Components/CustomForm.vue';
import CustomTextInputForm from "@/Components/CustomFormInputs/CustomTextInputForm.vue";
import { InputFormBuilder, CustomisableForm } from "@/Classes/Forms";

const page = usePage();
const errors = computed(() => page.props.errors);

const getPage = inject("getPageProgramatically") as ({}) => void;
const getQueryParams = inject("transformQueryParamsFromRoute") as () => {
  [key: string]: string;
};

let queryParams = getQueryParams();

const form = new CustomisableForm({
  q: queryParams["Q"] ?? "",
});

form.inputFormList = [
  InputFormBuilder.instance
    .setLabel("Search")
    .setName("search")
    .setType("text")
    .setRequired(false)
    .setAutofocus(true)
    .setAutocomplete("search")
    .setError(errors.value?.q ?? "")
    .setFormProp("q")
    .setTypeInput(CustomTextInputForm)
    .getItem(),
];

const debounceSearch = _.debounce(() => {
  getPage({
    q: form.formState.q,
    page: 1,
  });
}, 1000);

form.setWatcherToField('q', () => debounceSearch());

function submit() {}

</script>

<template>
  <CustomForm :form="form" @submit="submit"/>
</template>
