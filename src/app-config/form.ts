import { IForms } from "@/types";
import { TransactionTracker } from "./transaction-tracker";
import * as yup from "yup";

const FORMS: IForms[] = [
  ...TransactionTracker,
  {
    id: "form-1",
    title: "Contact Form",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        fields: [
          {
            id: "field-1",
            type: "text",
            label: "field 1",
            scope: "#/domain/field",
          },
          {
            id: "field-2",
            type: "text",
            label: "field 2",
            scope: "#/domain/ids/id",
          },
          {
            id: "field-3",
            type: "text",
            label: "field 3",
            scope: "#/domain/contact/name/custom/field/name",
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

export { FORMS };
