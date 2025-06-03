import React from "react";

export type DirectMessage = {
    id: number,
    user: boolean,
    userPicSrc: string,
    content: string
}
type MessageProps = {
    message: DirectMessage
}

const Message = ({message}: DirectMessage) => {
    
const selfMessageStyle = "flex justify-end items-start flex-row ml-auto p-1"
const friendMessageStyle = "flex justify-end items-start flex-row-reverse ml-auto p-1"

const selfMessageBubble = "bg-blue-300 rounded-2xl p-3.5 pl-6 w-170"
const friendMessageBubble = "bg-gray-300 rounded-2xl p-3.5 pl-6 w-170"

  return (
    <div id="message-group " className={message.user ? selfMessageStyle : friendMessageStyle}>
      <div
        id="message-bubble"
        className={(message.user ?  selfMessageBubble : friendMessageBubble) + "rounded-2xl p-3.5 pl-6 w-170"}
      >
        <p>{message.content}</p>
      </div>
      <img
        id="avatar"
        className="h-12 w-12  object-cover rounded-full m-4 mt-0"
        src={message.userPicSrc}
      />
    </div>
  );
};

export default Message;
