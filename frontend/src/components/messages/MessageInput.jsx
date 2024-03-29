import React from 'react'
import {BsSend} from 'react-icons/bs'

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text"
            placeholder='Send a Message'
            className='text-sm text-white border rounded-lg w-full block p-2.5 bg-gray-700 border-gray-600' />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                <BsSend/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput

// Starter code 
// import React from 'react'
// import {BsSend} from 'react-icons/bs'

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full'>
//             <input type="text"
//             placeholder='Send a Message'
//             className='text-sm text-white border rounded-lg w-full block p-2.5 bg-gray-700 border-gray-600' />
//             <button type='submit' className='absolute insert-y-0 end-0 flex items-center pe-3'>
//                 <BsSend/>
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput