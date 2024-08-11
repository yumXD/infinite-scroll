import React from 'react';
import CommentItem from './CommentItem';

interface Comment {
    id: number;
    text: string;
}

interface CommentListProps {
    comments: Comment[];
    onDelete: (id: number) => void;
}

function CommentList({ comments, onDelete }: CommentListProps) {
    return (
        <div>
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default CommentList;
