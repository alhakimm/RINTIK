import React, { Component } from 'react'
import axios from 'axios'
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";


export class PostCommunity extends Component {
    state = {
        posts: null,
        selectedPost: null
    }

    componentDidMount() {
      this.fetchPosts();
  }

  fetchPosts() {
      axios.get('http://localhost:5000/testingfirebase-3e0f7/us-central1/api/posts')
          .then(res => {
              console.log(res.data);
              this.setState({
                  posts: res.data
              });
          })
          .catch(err => console.log(err));
  }

    // click on post pop-up
    handlePostClick = (postId) => {
      axios.get(`http://localhost:5000/testingfirebase-3e0f7/us-central1/api/post/${postId}`)
          .then(res => {
              console.log("Response data:", res.data);
              this.setState({
                  selectedPost: res.data
              });
          })
          .catch(err => console.log(err));
          
      // Fetch comments for the post
      axios.get(`http://localhost:5000/testingfirebase-3e0f7/us-central1/api/post/${postId}/comments`)
      .then(res => {
          console.log("Comments data:", res.data);
          this.setState(prevState => ({
              selectedPost: {
                  ...prevState.selectedPost,
                  comments: res.data
              }
          }));
      })
      .catch(err => console.log(err));
}

addComment = () => {
  const postId = this.state.selectedPost.postId;
  const newCommentBody = document.getElementById('newComment').value.trim();

  if (newCommentBody === '') {
      alert('Comment must not be empty');
      return;
  }

  axios.post(`http://localhost:5000/testingfirebase-3e0f7/us-central1/api/post/${postId}/comment`, { body: newCommentBody })
      .then(res => {
          console.log(res.data);
          // Update state to reflect the new comment
          this.setState(prevState => ({
              selectedPost: {
                  ...prevState.selectedPost,
                  comments: prevState.selectedPost.comments ? [...prevState.selectedPost.comments, res.data] : [res.data]
              }
          }));
          this.handleClosePopup(null)
      })
      .catch(err => console.log(err));
}

    handleClosePopup = () => {
        this.setState({ selectedPost: null });
    }

    // utk update number of upvotes
    updatePostState = (postId, newUpvoteCount) => {
      this.setState(prevState => ({
          posts: prevState.posts.map(post => {
              if (post.postId === postId) {
                  return { ...post, upvote: newUpvoteCount };
              }
              return post;
          })
      }));
  }

    // untuk upvote
    handleUpvote = (postId) => {
      axios.post(`http://localhost:5000/testingfirebase-3e0f7/us-central1/api/post/${postId}/upvote`)
          .then(res => {
              console.log(res.data);
              this.updatePostState(postId, res.data.upvote);
          })
          .catch(err => console.log(err));
  }

      // untuk downvote
      handleDownvote = (postId) => {
        axios.delete(`http://localhost:5000/testingfirebase-3e0f7/us-central1/api/post/${postId}/unupvote`)
            .then(res => {
                console.log(res.data);
                this.updatePostState(postId, res.data.upvote);
            })
            .catch(err => console.log(err));
    }

  render() {
    let postFinder = this.state.posts ? (
        this.state.posts.map(posts => <div key={posts.id} className="posts-box bg-white mb-4 p-4 rounded-3xl">
          <div className='flex items-center'>
            <IoPersonCircleSharp size={40} className='mr-4 text-blue-500'/>
            <p className='mr-4 font-semibold text-lg'> {posts.username}</p>
            <p className='text-gray-400'> {posts.createdAt}</p>
          </div>
          <p className='mb-2'> {posts.body}</p>
          <div className='flex gap-2'>
                <button className='border rounded-full flex items-center px-2 bg-blue-500 text-white' onClick={() => this.handlePostClick(posts.postId)}>
                    <FaRegComments className='mr-2'/>{posts.comments}
                </button>
                <div className='flex bg-blue-500 rounded-full text-white'>
                    <button
                            className='border-none outline-none rounded-full flex items-center px-2 bg-blue-500 text-white'
                            onClick={() => this.handleUpvote(posts.postId)}>
                            <BiUpvote/> 
                    </button>
                    {posts.upvote}
                    <button
                        className='border-none outline-none rounded-full flex items-center px-2 bg-blue-500 text-white'
                        onClick={() => this.handleDownvote(posts.postId)}>
                        <BiDownvote/>
                    </button>
                </div>
                        
          </div>
      </div>
    )) : <p>loading...</p>

    
    return (
      <div className='flex flex-col items-center justify-center bg-blue-500 w-full min-h-screen gap-2'>
                  {/* Post Finder */}
                  <div className="custom-article-section-width custom-article-section-margin-left p-4 overflow-y-auto h-screen flex-1 col-span-2" style={{ scrollbarWidth: 'thin' }}>
                      {postFinder}
                  </div>


          {/* Pop-up menu */}
          {this.state.selectedPost && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 z-[99]">
                <div className="bg-white p-4 rounded-lg flex flex-col max-w-[40%] min-w-[40%]">
                <div className=' mb-4'>
                    <div className='flex justify-between'>
                    <p className='font-bold text-2xl'>{this.state.selectedPost.username}</p>
                    <button onClick={this.handleClosePopup}><IoClose size={30} /></button>
                    </div>
                    <p className='mb-4'>{this.state.selectedPost.body}</p>
                </div>
                <p className='font-semibold mb-2'>Comments</p>

                <div className=" w-full max-h-[50vh] overflow-y-auto mb-4">
                    {this.state.selectedPost.comments && this.state.selectedPost.comments.map(comment => (
                    <div key={comment.id} className="max-h-[50%]">
                        <div className='flex mb-4'>
                        <IoPersonCircleSharp size={30} className='mr-4 text-blue-300'/>
                        <div className='flex flex-col gap-2 bg-blue-300 rounded-lg p-2'>
                            <div className='flex gap-4 items-center'>
                            <p className='font-bold'>{comment.username}</p>
                            <p className='text-sm'>{new Date(comment.createdAt._seconds * 1000).toLocaleDateString()}</p>
                            </div>
                            <div className='text-wrap break-all'>
                            <p className='whitespace-pre-line'>{comment.body}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

      <div className='bg-blue-300 mt-4 flex items-center w-full rounded-md p-2'>    
        <IoPersonCircleSharp size={20} className='mr-4 text-black'/>
        <div className='w-full flex gap-2'>
          <input className='w-full' type="text" name="newComment" id="newComment" placeholder="Add a comment..." />
          <button onClick={()=>this.addComment()} ><IoIosSend /></button>
        </div>
      </div>
    </div>
  </div>
)}
        </div>
    );
}
}

export default PostCommunity;
