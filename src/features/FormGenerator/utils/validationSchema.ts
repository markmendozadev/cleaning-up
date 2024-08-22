/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISections, IFields } from "@/types";
import * as yup from "yup";

const generateFieldValidations = (formSections: ISections[]) => {
  const validations = formSections.reduce(
    (accumulator: Record<string, yup.AnySchema>, section: ISections) => {
      section.fields.forEach((field: IFields) => {
        if (field.validation) accumulator[field.id] = field.validation;
      });
      return accumulator;
    },
    {}
  );
  return yup.object().shape({
    ...validations,
  });
};

export default generateFieldValidations;
