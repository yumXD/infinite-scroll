import { atom } from 'recoil';

interface Comment {
    id: number;
    text: string;
}

export const commentListState = atom<Comment[]>({
    key: 'commentListState',
    default: [],
});

export const commentFormVisibilityState = atom<boolean>({
    key: 'commentFormVisibilityState',
    default: false,
});
