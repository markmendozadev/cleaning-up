import React from "react";
import { DialogClose } from "../ui/dialog";

function ModalClose({ children }: { children: React.ReactNode }) {
  return <DialogClose asChild>{children}</DialogClose>;
}

export default ModalClose;
