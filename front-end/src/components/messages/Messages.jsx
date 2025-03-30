import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'

const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <div className='sticky bottom-0 w-full'>
            <MessageInput />
        </div>
    </div>
  )
}

export default Messages