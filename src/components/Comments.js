import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Comments extends Component {
    // state = {
    //     comments: []
    // }

    // componentDidMount() {
    //     let comments = [];
    //     axios.get('https://jsonplaceholder.typicode.com/comments')
    //         .then(res => {
    //             res.data.forEach(comment => {
    //                 comments.push(comment);
    //             });
    //             comments = comments.slice(0, 4);
    //             this.setState({
    //                 'comments': comments
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }

    handleDelete = (id) => {
        let comments = [];
        this.props.comments.forEach(comment => {
            if (comment.id !== id) {
                comments.push(comment);
            }
        })
        this.props.deleteComment(comments);
    }

    render() {
        let comments = [];
        this.props.comments.forEach(comment => {
            comments.push(
                <div class="card-panel #bbdefb blue lighten-4 comments-card">
                    <div className="remove-comment">
                        <button className="btn #0d47a1 blue darken-4" onClick={() => { this.handleDelete(comment.id) }}>Delete</button>
                    </div>
                    <h5 className="comments-title grey-text">-{comment.email} posted a comment </h5>
                    <span class="black-text">
                        " {comment.body} "
                    </span>
                </div>
            )
        })
        return (
            <div className="container">
                {comments}
                {this.props.children}
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (comments) => dispatch({type: 'DELETE', comments: comments})
})

export default connect(mapStoreToProps, mapDispatchToProps)(Comments);