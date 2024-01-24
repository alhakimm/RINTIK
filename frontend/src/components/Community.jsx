import React from 'react'
import { useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5"
import { FaTelegramPlane } from "react-icons/fa";
import logo from '../assets/logo.png';
import PostCommunity from './PostCommunity';
import AutoscrollNews from './AutoscrollNews';
import JoinedGroup from './JoinedGroup';
import Weather from './Weather';

const Community = () => {

    // const [comments, setComments] = useState({});

    // const upvote = (postId) => {
    //   alert(`Upvoted post ${postId}`);
    //   // You can add logic to update the upvote count or perform other actions.
    // };

    // const handleComment = (postId) => {
    //   const commentText = prompt('Enter your comment:');
    //   if (commentText) {
    //     setComments((prevComments) => ({
    //       ...prevComments,
    //       [postId]: [...(prevComments[postId] || []), commentText],
    //     }));
    //   }
    // };

  return (
    <div>
      <div className='bg-blue-500 w-full flex px-20 justify-between h-full gap-2'>
        <div className='grid grid-cols-5 flex-1 mt-6'>
          <div className='w-full col-span-1 pr-6'>
          <Weather />
            <div className=' bg-blue-300 rounded-xl my-2'><JoinedGroup/></div>
          </div>
        {/* start of community post */}
          <div className='w-full col-span-3'>

            <div className="bg-white rounded-3xl shadow-md w-full p-4 mb-4">
              <div className='flex items-center'>
                <IoPersonCircleSharp size={40} className='mr-2 text-blue-500' />
                <textarea name="" id="" placeholder='Post your twit here' className='w-full resize-none border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
                <button className='text-blue-500 p-2'><FaTelegramPlane size={20}/></button>
              </div>
            </div>
            
            <div><PostCommunity/></div>
          </div>
          {/* end of community post */}
          <div className='w-full col-span-1 pl-6'>
            <div className='h-1/4 bg-red-200'>alert</div>
            <AutoscrollNews/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Community