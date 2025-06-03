import React from "react";
import type { DirectMessage } from "./MessageThread";

const messageData: DirectMessage = {
  id: 1,
  user: true,
  userPicSrc: "src/assets/PorcoRosso.jpg",
  content:
    "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
};

const Message = () => {
  return (
    <div id="message-group " className="flex justify-end items-start flex-row ml-auto">
      <div
        id="message-bubble"
        className="bg-blue-300 rounded-2xl p-3.5 pl-6 w-200"
      >
        <p>{messageData.content}</p>
      </div>
      <img
        id="avatar"
        className="h-10 w-10  object-cover rounded-full m-4 mt-0"
        src={messageData.userPicSrc}
      />
    </div>
  );
};

export default Message;
