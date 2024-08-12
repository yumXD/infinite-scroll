import React from 'react';
import '../../styles/CommentForm.css';
import {useRecoilState} from "recoil";
import {commentFormTextState} from "../../recoil/commentState";

interface CommentFormProps {
    onAddComment: (text: string) => void;
    formId?: number | string;
}

function CommentForm({onAddComment, formId = 'default'}: CommentFormProps) {
    const [text, setText] = useRecoilState(commentFormTextState(formId));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() === '') {
            alert('댓글을 입력하세요.');
            return;
        }
        onAddComment(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="댓글을 입력하세요..."
            />
            <button type="submit" className="submit-comment-button">
                댓글 등록
            </button>
        </form>
    );
}

export default CommentForm;
