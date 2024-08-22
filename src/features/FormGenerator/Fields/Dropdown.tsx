import { ComboBox } from "@/components/ComboBox";
import { Label } from "@/components/ui/label";
import { IFields } from "@/types";
import { Controller, useFormContext } from "react-hook-form";

function Dropdown(props: IFields) {
  const { id, label, options } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[id]?.message;
  return (
    <div className="position-relative py-2">
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
            <ComboBox
              options={options || []}
              value={value}
              comboRef={ref}
              onBlur={onBlur}
              onChange={onChange}
              errorMessage={errorMessage}
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

export default Dropdown;
