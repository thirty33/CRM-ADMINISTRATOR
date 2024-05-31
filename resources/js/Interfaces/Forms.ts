import { Component } from "vue";

export interface InputForm {
  labelName?: string;
  inputName?: string;
  inputType?: string;
  required?: boolean;
  autofocus?: boolean;
  autocomplete?: string;
  error?: string | undefined;
  formProp?: string;
  typeInput?: Component;
  id: string;
};

export interface FormItemBuilder {
  setLabel(labelName: string): FormItemBuilder;
  setName(name: string): FormItemBuilder;
  setType(type: string): FormItemBuilder;
  setAutocomplete(autocomplete: string): FormItemBuilder;
  setError(error: string): FormItemBuilder;
  setFormProp(formProp: string): FormItemBuilder;
  setAutofocus(autofocus: boolean): FormItemBuilder;
  setRequired(required: false): FormItemBuilder;
  setTypeInput(typeInput: Component): FormItemBuilder;
  getItem(): InputForm;
}
