import React from 'react'
import { useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5"
import logo from '../assets/logo.png';
import PostCommunity from './PostCommunity';

const Community = () => {

    const [comments, setComments] = useState({});

  const upvote = (postId) => {
    alert(`Upvoted post ${postId}`);
    // You can add logic to update the upvote count or perform other actions.
  };

  const handleComment = (postId) => {
    const commentText = prompt('Enter your comment:');
    if (commentText) {
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: [...(prevComments[postId] || []), commentText],
      }));
    }
  };

  return (
    <div>
      <div className='bg-gradient-to-r from-[#0A2236] to-[#15436E] w-full flex px-20 justify-between h-screen gap-2'>
        <div className='grid grid-cols-5 flex-1 mt-6'>
          <div className='w-full col-span-1 pr-6'>
            <div className='h-1/4 bg-red-200'>weather</div>
            <div className='h-2/4 bg-green-200 my-2'>joined group</div>
          </div>
          <div className='w-full col-span-3'>
            <div className="bg-white rounded-lg shadow-md w-full p-4">
              <div className="flex space-x-4">
              <IoPersonCircleSharp size={45} />
                <div className="flex-1">
                  <textarea
                    placeholder="Start a post..."
                    className="w-full h-20 resize-none border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none">
                  Post
                </button>
              </div>
            </div>

            <div className=''>
              <section id="forum">
                <div className="post mt-7 rounded-lg bg-white p-5">
                  <p className='text-xl font-bold'>Post Title 1</p>
                  <div className="post-body">Post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <button onClick={() => upvote(1)}>Upvote</button>
                  <button onClick={() => handleComment(1)}>Comment</button>
                  <div id="comments-1" className="comments">
                    {comments[1] && comments[1].map((comment, index) => (
                      <div key={index} className="comment">{comment}</div>
                    ))}
                  </div>
                </div>

                <div className="post">
                  <div className="post-title">Post Title 2</div>
                  <div className="post-body">Post 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  <button onClick={() => upvote(2)}>Upvote</button>
                  <button onClick={() => handleComment(2)}>Comment</button>
                  <div id="comments-2" className="comments">
                    {comments[2] && comments[2].map((comment, index) => (
                      <div key={index} className="comment">{comment}</div>
                    ))}
                  </div>
                </div>
              </section>
        </div>
            
            
            <div><PostCommunity/></div>
            <div>comunity</div>
          </div>
          <div className='w-full col-span-1 pl-6'>
            <div className='h-1/4 bg-red-200'>alert</div>
            <div className='h-2/4 bg-green-200 my-2'>autoscroll news</div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Community