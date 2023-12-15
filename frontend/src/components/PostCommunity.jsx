import React, { Component } from 'react'
import axios from 'axios'

export class PostCommunity extends Component {
    state = {
        posts: null
    }
    componentDidMount(){
        console.log('sini sampai')
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
        this.state.posts.map(posts => <p>{posts.body}</p>)
    ) : <p>loading...</p>

    return (
      <div>
        <h1>hello this is postcommunity</h1>
        {postFinder}
      </div>
    )
  }
}

export default PostCommunity