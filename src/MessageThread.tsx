import React from 'react'
import Message from './Message'

export type DirectMessage = {
    id: number,
    user: boolean,
    userPicSrc: string,
    content: string
}
type Conversation = DirectMessage[]

const conversationData = {


}
const directMessageData = {

}

const MessageThread = () => {
  return (
    <>
    <Message />
    </>
  )
}

export default MessageThread