// CommentListContainer.js
import React from "react";
import CommentList from "./CommentList";

class CommentListContainer extends React.Component {
    constructor() {
        super();
        this.state = { comments: [] }
    }

    componentDidMount() {
        fetch("/my-comments.json")
            .then(res => res.json())
            .then(comments => this.setState({ comments }))
    }

    render() {
        return <CommentList comments={this.state.comments} />;
    }
}