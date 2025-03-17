import { useEffect, useRef, useState } from "react";
import { InputMessage } from "./InputMessage";
import { MessageModal } from "./MessageModal";
import { SendButton } from "./SendButton";

export function ChatModal() {
  const [messages, setMessages] = useState(["hi there"]);
  const messageRef = useRef<HTMLInputElement>(null);
  const wsRef = useRef<WebSocket>(null);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => [setMessages((m) => [...m, event.data])];
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };
  }, []);

  return (
    <div className="flex justify-center pt-32 ">
      <div className="w-[35vw] h-[75vh] bg-gray-900 rounded-xl border-white shadow-2xl flex flex-col justify-between">
        <div className="flex flex-col gap-2 items-baseline p-5">
          {messages.map((message) => (
            <MessageModal message={message} />
          ))}
        </div>
        <div className="flex justify-around">
          <InputMessage
            placeholder="Message...."
            reference={messageRef}
          />
          <SendButton
            text={"Send"}
            onClick={() => {
              const message = messageRef.current.value;
              wsRef.current?.send(
                JSON.stringify({
                  type: "chat",
                  payload: {
                    message: message,
                  },
                })
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
