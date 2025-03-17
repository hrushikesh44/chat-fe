interface inputProps {
  reference?: any;
  placeholder?: string;
}

export function InputMessage({ reference, placeholder }: inputProps) {
  return (
    <div className="pb-8 pl-4">
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-lg shadow-lg w-[28vw] bg-white h-fit text-lg p-2 "
        ref={reference}
      />
    </div>
  );
}
