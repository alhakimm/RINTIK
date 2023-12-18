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
        <div className='w-1/4'>
          <div className='h-1/4 bg-red-200'>weather</div>
          <div className='h-2/4 bg-green-200 my-2'>joined group</div>
        </div>
        <div className='w-2/4 bg-green-300'>
          <div><PostCommunity/></div>
          <div>comunity</div>
        </div>
        <div className='w-1/4 '>
          <div className='h-1/4 bg-red-200'>alert</div>
          <div className='h-2/4 bg-green-200 my-2'>autoscroll news</div>
        </div>
      </div>

      <section id="forum">
        <div className="post">
          <div className="post-title">Post Title 1</div>
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
  )
}

export default Community