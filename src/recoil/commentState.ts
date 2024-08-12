import {atom, atomFamily} from 'recoil';

export interface Comment {
    id: number;
    text: string;
    createdAt: string;
    updatedAt?: string;
}

export const commentListState = atom<Comment[]>({
    key: 'commentListState',
    default: [],
});

export const isEditingState = atomFamily<boolean, number>({
    key: 'isEditingState',
    default: false,
});

export const editedTextState = atomFamily<string, number>({
    key: 'editedTextState',
    default: '',
});

export const commentFormTextState = atomFamily<string, number | string>({
    key: 'commentFormTextState',
    default: '',
});