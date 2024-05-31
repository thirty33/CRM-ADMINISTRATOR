<script setup lang="ts">
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import { InputForm } from "@/Interfaces/Forms";

const props = defineProps<{
  input: InputForm,
  prop: string
}>();

const model = defineModel<{[key: string]: string}>({ required: true });

</script>

<template>
  <div class="">
    
    <InputLabel :for="input.inputName" :value="input.labelName" />

    <TextInput
      :id="input.inputName"
      :type="input.inputType"
      class="mt-1 block w-full"
      v-model="model[prop]"
      :required="input.required"
      :autofocus="input.autofocus"
      :autocomplete="input.autocomplete"
    />

    <InputError class="mt-2" :message="input.error" />
  </div>
</template>
