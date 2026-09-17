import { forwardRef } from "react";

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  function DefaultInput({ id, type, labelText, ...props }, ref) {
    return (
      <div>
        {labelText && <label htmlFor={id}>{labelText}</label>}

        <input
          id={id}
          type={type}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);