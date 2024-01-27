import React, { Component } from 'react'
import axios from 'axios'
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { BiUpvote, BiDownvote } from "react-icons/bi";


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
                            <FaRegComments className='mr-2'/>
                        </button>
                        <button
                            className='border rounded-full flex items-center px-2 bg-blue-500 text-white'
                            onClick={() => this.handleUpvote(posts.postId)}>
                            <BiUpvote className='mr-2'/> {posts.upvote}
                        </button>
                        <button
                        className='border rounded-full flex items-center px-2 bg-blue-500 text-white'
                        onClick={() => this.handleDownvote(posts.postId)}>
                        <BiDownvote className='mr-2'/> {posts.downvote}
                        </button>
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
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-4 rounded-lg flex flex-col">
                    <p>{this.state.selectedPost.body}</p>

                    {this.state.selectedPost.comments && this.state.selectedPost.comments.map(comment => (

                        <div key={comment.id} className="comment w-full gap-4">
                          <div className='flex gap-4'>
                            <p>{comment.username}</p>
                            <p>{new Date(comment.createdAt._seconds * 1000).toLocaleDateString()}</p>
                          </div>
                            <p>{comment.body}</p>
                        </div>

                    ))}
                    <div>
                        <input type="text" name="newComment" id="newComment" placeholder="Add a comment..." />
                        <button onClick={()=>this.addComment()} >Submit</button>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button onClick={this.handleClosePopup}>Close</button>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}
}

export default PostCommunity;
