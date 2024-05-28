<script setup lang="ts">
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";

const props = defineProps<{
  // v_model_ref: string;
  errors: Object;
}>();

const model = defineModel({ default: "" })
</script>

<template>
  <div class="bg-blue-500">
    <InputLabel for="name" value="Name" />

    <TextInput
      id="name"
      type="text"
      class="mt-1 block w-full"
      v-model="model"
      required
      autofocus
      autocomplete="name"
    />

    <InputError class="mt-2" :message="errors?.name" />
  </div>
</template>
