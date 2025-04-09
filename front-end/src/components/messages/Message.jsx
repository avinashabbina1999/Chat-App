import { useAuthContext } from '../../context/AuthContext'
import React, { useState } from 'react'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'

const Message = ({message}) => {
  const [showTime, setShowTime] = useState(false);
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? 'bg-blue-500' : ''
  const formatedTime = extractTime(message.createdAt)
  const shakeClass = message.shouldShake ? 'shake' : ''

  return (
    <div className={`chat ${chatClassName}`} onClick={()=>setShowTime(!showTime)}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="user avatar" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
            {message.message}
        </div>
        {showTime && ( 
          <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-400'>
            {formatedTime}
          </div>
      )}
    </div>
  )
}

export default Message