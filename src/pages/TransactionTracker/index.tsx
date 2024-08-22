import { useAppDispatch } from "@/app-config/hooks";
import { createTransaction } from "@/app-config/slices/transactionSlice";
import Card from "@/components/Card";
import ModalDialog from "@/components/modal";
import ModalClose from "@/components/modal/ModalClose";
import { Button } from "@/components/ui/button";
import { COMMON, TRANSACTION_TRACKER } from "@/constants/constant";
import FormGenerator from "@/features/FormGenerator";
import useForm from "@/hooks/useForm";
import Container from "@/layout/Container";
import { ButtonType } from "@/types";
import { useEffect, useRef } from "react";
import History from "./History";
import { useToast } from "@/components/ui/use-toast";

function ExpenseTrackerPage() {
  const { setCurrentForm } = useForm();
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  // Set Current Form in form-generator should be the same id as your config.
  useEffect(() => {
    setCurrentForm({
      id: TRANSACTION_TRACKER.transaction_id,
    });
  }, [setCurrentForm]);

  const actions = [
    {
      custom: true,
      customComponent: (
        <ModalClose>
          <Button variant="secondary" type={ButtonType.button}>
            {COMMON.cancel}
          </Button>
        </ModalClose>
      ),
    },
    {
      id: "submit-transaction",
      type: ButtonType.button,
      children: TRANSACTION_TRACKER.add_new_transaction,
      onClick: () =>
        formRef.current?.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        ),
    },
  ];

  const onFormSubmit = (data: Record<string, unknown>) => {
    dispatch(createTransaction(data));
    toast({
      description: "Form Successfully Submitted!",
    });
  };
  return (
    <Container>
      <div className="flex justify-center items-center">
        <Card
          title={TRANSACTION_TRACKER.all_transaction}
          footer={
            <ModalDialog
              actions={actions}
              buttonTitle={TRANSACTION_TRACKER.add_transaction}
            >
              <FormGenerator formRef={formRef} customOnSubmit={onFormSubmit} />
            </ModalDialog>
          }
        >
          <History />
        </Card>
      </div>
    </Container>
  );
}

export default ExpenseTrackerPage;
