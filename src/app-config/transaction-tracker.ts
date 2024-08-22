import { TRANSACTION_TRACKER } from "@/constants/constant";
import { IForms } from "@/types";
import * as yup from "yup";

const TransactionTracker: IForms[] = [
  {
    id: TRANSACTION_TRACKER.transaction_id,
    sections: [
      {
        id: `${TRANSACTION_TRACKER.transaction_tracker}-section`,
        title: "New Transaction",
        fields: [
          {
            id: "transaction-title",
            type: "text",
            label: "Title",
            inputType: "text",
            scope: "#/title",
            validation: yup.string().required("Title is required"),
          },
          {
            id: "transaction-description",
            type: "text",
            label: "Description",
            inputType: "text",
            scope: "#/description",
            validation: yup.string().required("Description is required"),
          },
          {
            id: "transaction-amount",
            type: "text",
            label: "Amount",
            inputType: "number",
            scope: "#/amount",
            validation: yup
              .number()
              .typeError("Amount must be a number")
              .moreThan(-1, "Please enter valid Amount")
              .required("Amount is required"),
          },
          {
            id: "transaction-type",
            type: "dropdown",
            label: "Transaction Type",
            scope: "#/transactionType",
            options: [
              {
                label: "Income",
                value: "Income",
              },
              {
                label: "Expenses",
                value: "Expenses",
              },
            ],

            validation: yup.string().required("Transaction Type is Required"),
          },
        ],
      },
    ],
  },
];

export { TransactionTracker };
