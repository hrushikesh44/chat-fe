interface buttonProps {
  text: string;
  onClick?: () => void;
}

export function SendButton({ text, onClick }: buttonProps) {
  return (
    <div className="bg-green-500 w-[4.5vw] h-fit rounded-lg text-lg pr-[-10px] ">
      <button
        className="pt-2 pb-2 pr-3 pl-5 cursor-pointer "
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
