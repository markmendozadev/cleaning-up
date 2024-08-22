import { fieldsComponents } from "@/features/FormGenerator/utils";
import { HTMLInputTypeAttribute } from "react";
import { AnySchema } from "yup";

export interface IForms {
  id: string;
  title?: string;
  sections: ISections[];
}

export type ComponentType = keyof typeof fieldsComponents;

export interface options {
  label: string;
  value: string;
}

export interface IFields {
  id: string;
  type: ComponentType;
  label: string;
  scope: string;
  validation?: AnySchema; // custom yup validation
  inputType?: HTMLInputTypeAttribute; // Only works if type is "text"
  options?: options[];
  hidden?: boolean | { when: string[]; is: (value: string[]) => boolean };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

export interface ISections {
  id: string;
  title?: string;
  fields: IFields[];
}

export enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}
