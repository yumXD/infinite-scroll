import {atom, selector} from 'recoil';
import {Place} from '../types';

export const placeListState = atom<Place[]>({
    key: 'placeListState',
    default: [],
});

export const selectedCategoryState = atom<string>({
    key: 'selectedCategoryState',
    default: 'All',
});

export const pageState = atom<number>({
    key: 'pageState',
    default: 1,
});

export const loadingState = atom<boolean>({
    key: 'loadingState',
    default: false,
});

export const hasMoreState = atom<boolean>({
    key: 'hasMoreState',
    default: true,
});

export const filteredPlacesState = selector<Place[]>({
    key: 'filteredPlacesState',
    get: ({get}) => {
        const places = get(placeListState);
        const selectedCategory = get(selectedCategoryState);

        if (selectedCategory === 'All') {
            return places;
        }

        return places.filter((place) => place.category === selectedCategory);
    },
});

export const categoryListState = selector<string[]>({
    key: 'categoryListState',
    get: ({get}) => {
        const places = get(placeListState);
        const categories = places.map((place) => place.category);
        return Array.from(new Set(categories));
    },
});
