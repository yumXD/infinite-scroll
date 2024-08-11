import React from 'react';

interface CommentItemProps {
    comment: { id: number; text: string };
    onDelete: (id: number) => void;
}

function CommentItem({ comment, onDelete }: CommentItemProps) {
    return (
        <div>
            <p>{comment.text}</p>
            <button onClick={() => onDelete(comment.id)}>코멘트 삭제</button>
        </div>
    );
}

export default CommentItem;
