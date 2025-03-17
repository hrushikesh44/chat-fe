interface messageProps {
  message: string;
}

export function MessageModal({ message }: messageProps) {
  return (
    <div className="bg-white rounded-lg ">
      <div className="h-fit max-w-[20vw] shadow-lg text-lg p-2  ">
        {message}
      </div>
    </div>
  );
}
