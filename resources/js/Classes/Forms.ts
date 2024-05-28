import { Component, DefineComponent, FunctionalComponent, Ref } from "vue";

export interface InputForm {
  labelName: string;
  inputName: string;
  inputType: string;
  required: boolean;
  autofocus: boolean;
  autocomplete: string;
  error: string | undefined;
  formProp: string;
  typeInput: Component;
};
