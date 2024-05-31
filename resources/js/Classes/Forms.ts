import { Component, reactive, watch } from "vue";
import { v4 as uuidv4 } from 'uuid';
import { InputForm, FormItemBuilder } from '@/Interfaces/Forms';

export class Input implements InputForm {

  public labelName?: string;
  public inputName?: string;
  public inputType?: string;
  public required?: boolean;
  public autofocus?: boolean;
  public autocomplete?: string;
  public error?: string | undefined;
  public formProp?: string;
  public typeInput?: Component;

  constructor(
    public id: string) {
  }
}

export class InputFormBuilder implements FormItemBuilder {

  public itemForm: InputForm = new Input(uuidv4());

  static #instance: InputFormBuilder;

  public static get instance(): InputFormBuilder {

    if (!InputFormBuilder.#instance) {
      InputFormBuilder.#instance = new InputFormBuilder();
    }

    return InputFormBuilder.#instance;
  }

  private constructor() {
    this.reset();
  }

  public reset(): FormItemBuilder {
    this.itemForm = new Input(uuidv4());
    return this;
  }

  setLabel(labelName: string): FormItemBuilder {
    this.itemForm.labelName = labelName;
    return this;
  }

  setName(inputName: string): FormItemBuilder {
    this.itemForm.inputName = inputName;
    return this;
  }

  setType(inputType: string): FormItemBuilder {
    this.itemForm.inputType = inputType;
    return this;
  }

  setAutocomplete(autocomplete: string): FormItemBuilder {
    this.itemForm.autocomplete = autocomplete;
    return this;
  }

  setError(error: string): FormItemBuilder {
    this.itemForm.error = error;
    return this;
  }

  setFormProp(formProp: string): FormItemBuilder {
    this.itemForm.formProp = formProp;
    return this;
  }

  setAutofocus(autofocus: false): FormItemBuilder {
    this.itemForm.autofocus = autofocus;
    return this;
  }

  setTypeInput(typeInput: Component): FormItemBuilder {
    this.itemForm.typeInput = typeInput;
    return this;
  }

  setRequired(required: false): FormItemBuilder {
    this.itemForm.required = required;
    return this;
  }

  getItem(): InputForm {
    const result = this.itemForm;
    this.reset();
    return result;
  }
}

export class CustomisableForm {

  private _inputFormList: InputForm[] = [];
  private _formState = reactive({});

  constructor(state: {[key: string]: number | string | boolean}) {
    this.formState = state;
  }

  public set inputFormList(inputs: InputForm[]) {
    this._inputFormList = [...inputs];
  }

  public get inputFormList() {
    return this._inputFormList;
  }

  public set formState(state: {[key: string]: number | string | boolean}) {
    this._formState = reactive(state);
  }

  public get formState(): {[key: string]: number | string | boolean} {
    return this._formState;
  }

  public setWatcherToField(stateProperty: string, callback: () => void) {
    return watch(
      () => this.formState[stateProperty],
      () => {
        callback();
      }
    )
  }

}
