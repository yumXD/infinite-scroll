import React, { useState } from 'react';
import '../../styles/CommentForm.css';

interface CommentFormProps {
    onAddComment: (text: string) => void;
}

function CommentForm({ onAddComment }: CommentFormProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAddComment(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="댓글을 입력하세요..."
            />
            <button type="submit">댓글 등록</button>
        </form>
    );
}

export default CommentForm;
