import React, { Component } from 'react'
import axios from 'axios'
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { BiUpvote } from "react-icons/bi";


export class PostCommunity extends Component {
    state = {
        posts: null
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

  // untuk upvote tapi xjadi babi
  handleUpvote = (postId) => {
    axios.post(`http://localhost:5000/testingfirebase-3e0f7/us-central1/api/posts/upvotePost/${postId}`)
        .then(res => {
            console.log(res.data);

            this.setState(prevState => ({
                posts: prevState.posts.map(post => {
                    if (post.postId === postId) {
                        return { ...post, upvote: res.data.upvoteCount };
                    }
                    return post;
                })
            }));
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
          <button className='border rounded-full flex items-center px-2 bg-blue-500 text-white'>
                            <FaRegComments className='mr-2'/> {posts.comments}
                        </button>
                        <button
                            className='border rounded-full flex items-center px-2 bg-blue-500 text-white'
                            onClick={() => this.handleUpvote(posts.postId)}>
                            <BiUpvote className='mr-2'/> {posts.upvote}
                        </button>
          </div>
      </div>
    )) : <p>loading...</p>

    return (
      <div className='flex flex-col'>
         {postFinder}
      </div>
    )
  }
}

export default PostCommunity