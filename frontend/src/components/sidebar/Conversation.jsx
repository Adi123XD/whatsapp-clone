import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 rounded items-center p-2 py-1 hover:bg-sky-500 cursor-pointer'>
        <div class="avatar online">
            <div class="w-24 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='user avatar' />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'> Adarsh</p>
                <span className='text-xl'>😊</span>
            </div>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation

// Starter code 
// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//     <div className='flex gap-2 rounded items-center p-2 py-1 hover:bg-sky-500 cursor-pointer'>
//         <div class="avatar online">
//             <div class="w-24 rounded-full">
//                 <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='user avatar' />
//             </div>
//         </div>
//         <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//                 <p className='font-bold text-gray-200'> Adarsh</p>
//                 <span className='text-xl'>😊</span>
//             </div>
//         </div>
//     </div>
//     <div className='divider my-0 py-0 h-1'></div>
//     </>
//   )
// }

// export default Conversation