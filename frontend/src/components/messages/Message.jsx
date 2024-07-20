import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="" alt="Tailwind css chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-700 ubuntu-regular`}>
        Hi what's up?
      </div>
      <div className="chat-footer flex gap-1 items-center text-xs opacity-50">
        12:12
      </div>
    </div>
  );
};

export default Message;
