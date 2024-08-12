import React from 'react';
import '../../styles/CommentItem.css';
import {useRecoilState} from "recoil";
import {editedTextState, isEditingState} from "../../recoil/commentState";

interface CommentItemProps {
    comment: { id: number; text: string; createdAt: string; updatedAt?: string };
    onDelete: (id: number) => void;
    onUpdate: (id: number, newText: string) => void;
}

function CommentItem({comment, onDelete, onUpdate}: CommentItemProps) {
    const [isEditing, setIsEditing] = useRecoilState(isEditingState(comment.id));
    const [editedText, setEditedText] = useRecoilState(editedTextState(comment.id));

    const handleSave = () => {
        onUpdate(comment.id, editedText);
        setIsEditing(false);
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm('이 댓글을 삭제하시겠습니까?');
        if (confirmDelete) {
            onDelete(comment.id);
        }
    };

    return (
        <div className="comment-item">
            <div className="comment-header">
                <span className="comment-date">
                    {comment.updatedAt ? `수정됨: ${comment.updatedAt}` : `작성됨: ${comment.createdAt}`}
                </span>
                <div className="comment-actions">
                    {isEditing ? (
                        <>
                            <button className="save-button" onClick={handleSave}>저장</button>
                            <button className="cancel-button" onClick={() => setIsEditing(false)}>취소</button>
                        </>
                    ) : (
                        <>
                            <button className="edit-button" onClick={() => setIsEditing(true)}>수정</button>
                            <button className="delete-button" onClick={handleDelete}>삭제</button>
                        </>
                    )}
                </div>
            </div>
            {isEditing ? (
                <textarea
                    className="edit-textarea"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
            ) : (
                <p className="comment-text">{comment.text}</p>
            )}
        </div>
    );
}

export default CommentItem;