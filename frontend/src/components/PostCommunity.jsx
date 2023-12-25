import React, { Component } from 'react'
import axios from 'axios'
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { BiUpvote } from "react-icons/bi";

export class PostCommunity extends Component {
    state = {
        posts: null
    }
    componentDidMount(){
        axios.get('http://localhost:5000/testingfirebase-3e0f7/us-central1/api/posts')
            .then(res => {
                console.log(res.data)
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => console.log(err))
    }
  render() {
    let postFinder = this.state.posts ? (
        this.state.posts.map(posts => <div key={posts.id} className="posts-box bg-white mb-4 p-4 rounded-3xl">
          <div className='flex items-center'>
            <IoPersonCircleSharp size={30} className='mr-4'/>
            <p className='mr-4 font-semibold'> {posts.username}</p>
            <p className='text-gray-400'> {posts.createdAt}</p>
          </div>
          <p className='mb-2'> {posts.body}</p>
          <div className='flex gap-2'>
            <button className='border rounded-full flex items-center px-2 bg-[#15436E] text-white'><FaRegComments className='mr-2'/> {posts.comments}</button>
            <button className='border rounded-full flex items-center px-2 bg-[#15436E] text-white'><BiUpvote className='mr-2'/> {posts.upvote}</button>
          </div>
      </div>
    )) : <p>loading...</p>

    return (
      <div>
        <h1>hello this is postcommunity</h1>
        {postFinder}
      </div>
    )
  }
}

export default PostCommunity