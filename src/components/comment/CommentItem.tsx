import React, { useState } from 'react';
import '../../styles/CommentList.css';

interface CommentItemProps {
    comment: { id: number; text: string };
    onDelete: (id: number) => void;
    onUpdate: (id: number, newText: string) => void;
}

function CommentItem({ comment, onDelete, onUpdate }: CommentItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(comment.text);

    const handleSave = () => {
        onUpdate(comment.id, newText);
        setIsEditing(false);
    };

    return (
        <div className="comment-item">
            {isEditing ? (
                <div>
                    <textarea
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        style={{ width: '100%', padding: '5px' }}
                    />
                    <button onClick={handleSave}>저장</button>
                </div>
            ) : (
                <p>{comment.text}</p>
            )}
            <div>
                <button onClick={() => setIsEditing(!isEditing)} style={{ marginRight: '10px' }}>
                    {isEditing ? '취소' : '수정'}
                </button>
                <button onClick={() => onDelete(comment.id)} style={{ color: 'red' }}>
                    삭제
                </button>
            </div>
        </div>
    );
}

export default CommentItem;
