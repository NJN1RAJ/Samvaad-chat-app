import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser.id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const formattedTime = extractTime(message.createdAt);
  const bubbleBgColor = fromMe ? "bg-blue-700" : "bg-gray-700";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Tailwind css chat bubble component" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ubuntu-regular ${bubbleBgColor} ${shakeClass}`}
      >
        {message.message}
      </div>
      <div className="chat-footer flex gap-1 items-center text-xs opacity-50">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
