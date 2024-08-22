// Imported Libs
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Custom
import useFormGenerator from "@/hooks/useForm";
import GenerateSections from "./Components/Sections";

// Utils
import { GetCurrentForm, onFormat } from "./utils";
import generateFieldValidations from "./utils/validationSchema";

function FormGenerator({
  formRef,
  customOnSubmit,
}: {
  formRef?: React.RefObject<HTMLFormElement>;
  customOnSubmit?: (data: Record<string, unknown>) => void;
}) {
  const { currentForm } = useFormGenerator();
  const formId = GetCurrentForm(currentForm?.id || "");

  const schema = generateFieldValidations(formId?.sections || []);

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: unknown) => {
    const formattedData = onFormat(formId, data);

    // Add other way of submitting
    if (!customOnSubmit || !formattedData) return;

    customOnSubmit(formattedData);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} ref={formRef}>
        {formId?.title && <h1>{formId?.title}</h1>}
        <div>{formId?.sections.map(GenerateSections)}</div>
      </form>
    </FormProvider>
  );
}

export default FormGenerator;
