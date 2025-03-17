import { MessageModal } from "./MessageModal";

export function ChatModal() {
  return (
    <div className="flex justify-center pt-32 ">
      <div className="w-[35vw] h-[75vh] bg-slate-300 rounded-xl border shadow-2xl ">
        <div className="flex justify-end items-baseline p-3">
          <MessageModal message="Hello, This is Hrushikesh" />
          <MessageModal message="Hello, This is Hrushikesh" />
        </div>
      </div>
    </div>
  );
}
