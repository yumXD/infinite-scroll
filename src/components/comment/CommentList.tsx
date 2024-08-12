import React from 'react';
import CommentItem from './CommentItem';
import '../../styles/CommentList.css';

interface Comment {
    id: number;
    text: string;
}

interface CommentListProps {
    comments: Comment[];
    onDelete: (id: number) => void;
    onUpdate: (id: number, newText: string) => void;
}

function CommentList({ comments, onDelete, onUpdate }: CommentListProps) {
    return (
        <div className="comment-list-container">
            <h3 className="comment-list-header">
                댓글 {comments.length > 0 ? `(${comments.length})` : '없음'}
            </h3>
            <div className="comment-list">
                {comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} onDelete={onDelete} onUpdate={onUpdate} />
                ))}
            </div>
        </div>
    );
}

export default CommentList;
