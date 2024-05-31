<script setup lang="ts">
import _ from "lodash";
import { CustomisableForm } from "@/Classes/Forms";

const props = defineProps<{
  form: CustomisableForm,
}>();

</script>

<template>
  <form
    @submit.prevent="$emit('submit')"
    class="mt-6 space-y-6 grid grid-cols-4 gap-x-0.5"
  >
    <template v-for="input in props.form.inputFormList">
      <component
        v-if="input.typeInput"
        :is="input.typeInput"
        :key="input.inputName"
        :input="input"
        :prop="input.formProp"
        v-model="props.form.formState"
      />
    </template>
  </form>
</template>
