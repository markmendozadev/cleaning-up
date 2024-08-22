import FormGenerator from "@/features/FormGenerator";
import useFormGenerator from "@/hooks/useForm";
import Container from "@/layout/Container";
import { useEffect, useRef } from "react";

function FormPage() {
  const { setCurrentForm } = useFormGenerator();
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    setCurrentForm({
      id: "form-1",
    });
  }, [setCurrentForm]);
  return (
    <Container>
      <FormGenerator formRef={formRef} />
      <button
        onClick={() =>
          formRef.current?.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
          )
        }
      >
        Submit With Ref
      </button>
    </Container>
  );
}

export default FormPage;
