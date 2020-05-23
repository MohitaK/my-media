import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments.js';

export default class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        let posts = [];
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            res.data.forEach(post => {
                if (post.userId === 1) {
                    posts.push(post);
                }
            });
            posts = posts.slice(0,3);
            this.setState({
                'posts': posts
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    deletePost = (id) => {
        let posts = [];
        this.state.posts.forEach(post => {
            if (post.id !== id) {
                posts.push(post);
            }
        })
        this.setState({
            'posts': posts
        })
    }

    render() {
        let posts = [];
        this.state.posts.forEach(post => {
            posts.push(
                <div className="container">
                    <div className="post-content container">
                        <h5 className="post-title center">
                            {post.title}
                        </h5>
                        <span class="black-text post-body">
                            {post.body}
                        </span>
                    </div>
                    <div className="row post-footer #e3f2fd blue lighten-5">
                        <div className="col l6">
                            <p className="grey-text">Posted by you 2 mins ago</p>
                        </div>
                        <div className=" col l6 post-icons">
                            <i className="material-icons small icon fav">favorite</i>
                            <i className="material-icons small icon edit">create</i>
                            <i className="material-icons small icon delete" onClick={() => {this.deletePost(post.id)}}>cancel</i>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div>
                {/* <Comments>
                    <h1>This is Child1</h1>
                    <h1>This is Child2</h1>
                </Comments> */}
                {posts}
            </div>
        )
    }
}