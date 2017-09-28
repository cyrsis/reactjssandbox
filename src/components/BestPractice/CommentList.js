// CommentList.js
import React from "react";

const Commentlist = comments => (
    <ul>
        {comments.map(({ body, author }) =>
            <li>{body}-{author}</li>
        )}
    </ul>
)