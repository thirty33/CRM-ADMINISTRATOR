<script setup lang="ts">
import _ from "lodash";
import { computed } from "vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { CustomisableForm } from "@/Classes/Forms";
import { useTranslation } from "@/Hooks/useTranslations";

const { translate } = useTranslation();

const props = withDefaults(
  defineProps<{
    form: CustomisableForm;
    form_cols?: string;
    show_actions?: boolean;
  }>(),
  {
    form_cols: "4",
    show_actions: false,
  }
);

const classObject = computed(() => ({
  [`${"grid-cols-" + props.form_cols}`]: true,
}));
</script>

<template>
  <form
    @submit.prevent="$emit('submit')"
    class="mt-6 grid gap-x-2 gap-y-4"
    :class="classObject"
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
    <div
      v-if="props.show_actions"
      class="w-full mt-6 grid col-span-2 justify-end justify-items-end"
      :class="classObject"
    >
      <div class="w-max col-start-2 pr-2.5">
        <PrimaryButton :disabled="false">{{ translate("Save") }}</PrimaryButton>
      </div>
    </div>
  </form>
</template>
