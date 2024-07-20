import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w-[550px] flex flex-col rounded-tr-lg border-r border-t border-b border-slate-500">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-blue-500 px-4 py-2 mb-2 rounded-tr-lg">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 ubuntu-bold">John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-800 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 John Doe</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
