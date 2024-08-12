import React, {useState} from 'react';
import '../../styles/CommentItem.css';

interface CommentItemProps {
    comment: { id: number; text: string };
    onDelete: (id: number) => void;
    onUpdate: (id: number, newText: string) => void;
}

function CommentItem({comment, onDelete, onUpdate}: CommentItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(comment.text);

    const handleSave = () => {
        onUpdate(comment.id, editedText);
        setIsEditing(false);
    };

    return (
        <div className="comment-item">
            {isEditing ? (
                <textarea
                    className="edit-textarea"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
            ) : (
                <p className="comment-text">{comment.text}</p>
            )}
            <div className="comment-actions">
                {isEditing ? (
                    <>
                        <button className="save-button" onClick={handleSave}>저장</button>
                        <button className="cancel-button" onClick={() => setIsEditing(false)}>취소</button>
                    </>
                ) : (
                    <>
                        <button className="edit-button" onClick={() => setIsEditing(true)}>수정</button>
                        <button className="delete-button" onClick={() => onDelete(comment.id)}>삭제</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default CommentItem;