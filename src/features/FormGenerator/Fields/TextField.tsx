import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IFields } from "@/types";
import { Controller, useFormContext } from "react-hook-form";

function TextField(props: IFields) {
  const { id, label, inputType, hidden } = props;
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  const errorMessage = errors[id]?.message;

  const isHidden =
    typeof hidden === "object" ? hidden?.is(watch(hidden?.when)) : hidden;

  if (isHidden) return null;

  return (
    <div className="py-1">
      <Label
        htmlFor={id}
        className={`text-md ${errorMessage ? "text-red-600" : "text-inherit"}`}
      >
        {label}
      </Label>
      <Controller
        control={control}
        name={id}
        render={({ field: { onChange, onBlur, value, ref } }) => {
          return (
            <Input
              className={`w-full ${
                errorMessage ? "border-red-600" : "border-inherit"
              }`}
              type={inputType}
              value={value ? value : ""}
              ref={ref}
              onBlur={onBlur}
              onChange={onChange}
            />
          );
        }}
      />
      {errorMessage && (
        <small className="text-sm font-medium leading-none text-red-600	">{`${errorMessage}`}</small>
      )}
    </div>
  );
}

export default TextField;
