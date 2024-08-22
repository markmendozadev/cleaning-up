import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface IModalDialogButton {
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  custom?: boolean;
  customComponent?: React.ReactNode;
  forceClose?: boolean;
}

interface IModalDialog {
  children: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  buttonTitle: React.ReactNode;
  actions?: IModalDialogButton[];
}

function ModalDialog({
  children,
  title,
  subTitle,
  actions,
  buttonTitle,
}: IModalDialog) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          {buttonTitle}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {subTitle && <DialogDescription>{subTitle}</DialogDescription>}
        </DialogHeader>
        {children}
        {actions && actions?.length > 0 && (
          <DialogFooter>
            {actions?.map(
              ({
                id,
                type,
                onClick,
                children,
                custom,
                customComponent,
                forceClose,
              }) => {
                if (custom) {
                  return customComponent;
                }
                if (forceClose) {
                  return (
                    <DialogClose asChild>
                      <Button key={id} type={type} onClick={onClick}>
                        {children}
                      </Button>
                    </DialogClose>
                  );
                }
                return (
                  <Button key={id} type={type} onClick={onClick}>
                    {children}
                  </Button>
                );
              }
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ModalDialog;
