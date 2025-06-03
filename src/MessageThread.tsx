import React, { useState } from 'react'
import Message from './Message'
import type {DirectMessage} from './Message'


type Conversation = DirectMessage[]

const conversationData: Conversation = [{
  id: 1,
  user: true,
  userPicSrc: "src/assets/PorcoRosso.jpg",
  content:
    "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
},
{
  id: 2,
  user: true,
  userPicSrc: "src/assets/PorcoRosso.jpg",
  content:
    "I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet. ",
},
{
    id: 3,
  user: false,
  userPicSrc: "src/assets/curtis.jpg",
  content:
    "I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.",
},
{
  id: 4,
  user: true,
  userPicSrc: "src/assets/PorcoRosso.jpg",
  content:
    "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
}];





const MessageThread = () => {
    const [thread, setThread] = useState(conversationData);

    
  return (
    <>
    {thread.map((message) => <Message key={message.id} message={message}/>)}
    </>
  )
}

export default MessageThread