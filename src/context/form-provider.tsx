import React, { createContext, useState } from "react";

type FormProviderProps = {
  children: React.ReactNode;
};

interface CurrentForm {
  id: string;
}
type FormProviderState = {
  currentForm: CurrentForm | null;
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentForm | null>>;
};

const initialState: FormProviderState = {
  currentForm: null,
  setCurrentForm: () => {},
};

export const FormProviderContext =
  createContext<FormProviderState>(initialState);

export function FormProvider({ children }: FormProviderProps) {
  const [currentForm, setCurrentForm] = useState<CurrentForm | null>(null);

  const value = {
    currentForm,
    setCurrentForm,
  };

  return (
    <FormProviderContext.Provider value={value}>
      {children}
    </FormProviderContext.Provider>
  );
}
