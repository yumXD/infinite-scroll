import React, { useState } from 'react';

interface CommentFormProps {
    onAddComment: (text: string) => void;
}

function CommentForm({ onAddComment }: CommentFormProps) {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        onAddComment(text);
        setText('');
    };

    return (
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleSubmit}>코멘트 등록</button>
        </div>
    );
}

export default CommentForm;
