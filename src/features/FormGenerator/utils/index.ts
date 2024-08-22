/* eslint-disable @typescript-eslint/no-explicit-any */
import { FORMS } from "@/app-config/form";
import Dropdown from "../Fields/Dropdown";
import TextField from "../Fields/TextField";
import { IForms } from "@/types";

const fieldsComponents = {
  text: TextField,
  dropdown: Dropdown,
};

const GetComponentType = () => {
  // return all forms
};

const GetCurrentForm = (id: string) => {
  const form = FORMS.find((form) => form.id === id);
  return form;
};

export function isObject(item: unknown) {
  return item && typeof item === "object" && !Array.isArray(item);
}

export function stringToObject(str: string, currentValue: string) {
  const keys = str.split(".");
  const lastKey = keys[keys.length - 1];
  const reduced = keys
    .reverse()
    .reduce((accu: Record<string, unknown>, curr, index) => {
      // checking if last key or last item is the same as current item and index = 0 then we can early return because it's probably not deeply nested.
      if (lastKey === curr && index === 0) {
        accu[curr] = currentValue;
        return accu;
      }

      return { [curr]: { ...accu } };
    }, {});
  return reduced;
}
export function mergeDeep(target: any, ...sources: any) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

export const onFormat = (currentForm: IForms | undefined, data: unknown) => {
  if (!currentForm) return;
  const formatted = currentForm?.sections.reduce((sectionAccu, section) => {
    sectionAccu = section.fields.reduce((fieldAccu, field) => {
      // getting the value after #/
      const path = field.scope.split("#/")[1];
      const id = field.id;

      // updating the path to use . instead of /
      const object = path.replace(/\//g, ".");
      const currentValue = data ? data[id as keyof typeof data] : "";
      // convert the string to object and attach the values.
      const currentObj = stringToObject(object, currentValue);
      return mergeDeep(fieldAccu, currentObj);
    }, {});
    return { ...sectionAccu };
  }, {});
  console.log(formatted);
  return formatted;
};

// const formatForm = (data: unknown, keys:) => {};

export { GetComponentType, fieldsComponents, GetCurrentForm };
