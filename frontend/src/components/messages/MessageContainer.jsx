import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'

const MessageContainer = () => {
    const nochatselected = true
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        
        {nochatselected ? (<NoChatSelected/>) :
        (
        <>
        {/* Headers */}
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>{" "}
            <span className='text-gray-900 font-bold'>Adarsh</span>
        </div>
        <Messages/>
        <MessageInput/>
        </>
        )}
    </div>
  )
}

export default MessageContainer;

const NoChatSelected =()=>{
    return (
        <div className='flex items-center w-full h-full justify-center'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col gap-2 items-center'>
                <p>Welcome 👋 Adi ❄️</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl text-center md:text-6xl '/>
            </div>
        </div>
    )
}