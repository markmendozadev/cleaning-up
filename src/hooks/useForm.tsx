import { FormProviderContext } from "@/context/form-provider";
import { useContext } from "react";

const useFormGenerator = () => {
  const context = useContext(FormProviderContext);

  if (context === undefined)
    throw new Error("useForm must be used within a FormProvider");

  return context;
};
export default useFormGenerator;
