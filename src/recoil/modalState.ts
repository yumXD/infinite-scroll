import {atom} from 'recoil';

export const currentIndexState = atom<number>({
    key: 'currentIndexState',
    default: 0,
});

export const isModalOpenState = atom<boolean>({
    key: 'isModalOpenState',
    default: false,
});
