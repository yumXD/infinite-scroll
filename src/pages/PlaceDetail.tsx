import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { placeListState } from '../recoil/placeState';
import PlaceName from '../components/place/PlaceName';
import PlaceAddress from '../components/place/PlaceAddress';
import PlaceDescription from '../components/place/PlaceDescription';
import PlaceImages from '../components/place/PlaceImages';
import CommentList from '../components/comment/CommentList';
import CommentForm from '../components/comment/CommentForm';

interface Comment {
    id: number;
    text: string;
}

function PlaceDetail() {
    const { name } = useParams<{ name: string }>();
    const places = useRecoilValue(placeListState);
    const place = places.find((place) => place.name === name);
    const [comments, setComments] = React.useState<Comment[]>([]);

    if (!place) return <div>Loading...</div>;

    const handleAddComment = (text: string) => {
        const newComment = {
            id: comments.length + 1,
            text,
        };
        setComments([...comments, newComment]);
    };

    const handleDeleteComment = (commentId: number) => {
        setComments(comments.filter((comment) => comment.id !== commentId));
    };

    return (
        <div>
            <PlaceName name={place.name} />
            <PlaceAddress address={place.address} />
            <PlaceImages images={place.images} />
            <PlaceDescription description={place.description} />
            <CommentList comments={comments} onDelete={handleDeleteComment} />
            <CommentForm onAddComment={handleAddComment} />
        </div>
    );
}

export default PlaceDetail;