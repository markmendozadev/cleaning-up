import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { options as IOptions } from "@/types";
import { Noop, RefCallBack } from "react-hook-form";

interface IComboBox {
  options: IOptions[];
  value: unknown;
  comboRef: RefCallBack;
  onBlur: Noop;
  onChange: (...event: unknown[]) => void;
  errorMessage: unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

export function ComboBox({
  options,
  value,
  comboRef,
  onBlur,
  onChange,
  errorMessage,
}: IComboBox) {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-full justify-between ${
            errorMessage ? "border-red-600" : "border-inherit"
          }`}
        >
          {value
            ? options.find((option) => option.value.toLowerCase() === value)
                ?.label
            : "Select Options..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[375px] p-0">
        <Command className="w-full">
          <CommandInput placeholder="Search Options..." className="h-9" />
          <CommandEmpty>No options found.</CommandEmpty>
          <CommandGroup>
            {options?.map((option) => {
              return (
                <CommandItem
                  key={option.value}
                  value={option.value.toString()}
                  onBlur={onBlur}
                  ref={comboRef}
                  onSelect={(value) => {
                    onChange(value);
                    setOpen(false);
                  }}
                  className="cursor-click"
                >
                  {option.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
