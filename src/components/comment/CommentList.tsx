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
        <div>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} onDelete={onDelete} onUpdate={onUpdate} />
                ))
            ) : (
                <p>아직 댓글이 없습니다. 첫 번째 댓글을 남겨보세요!</p>
            )}
        </div>
    );
}

export default CommentList;
