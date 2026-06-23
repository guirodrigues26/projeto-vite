type DefaultInputProps = {
  id: string;
  labelText?: string; // <-- Prop opcional
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText }: DefaultInputProps) {
  return (
    <div>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} type={type} />
    </div>
  );
}