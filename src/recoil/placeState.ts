import { atom, selector } from 'recoil';
import { Place } from '../types';

export const placeListState = atom<Place[]>({
    key: 'placeListState',
    default: [],
});

export const selectedCategoryState = atom<string>({
    key: 'selectedCategoryState',
    default: 'All',
});

export const filteredPlacesState = selector<Place[]>({
    key: 'filteredPlacesState',
    get: ({ get }) => {
        const category = get(selectedCategoryState);
        const places = get(placeListState);

        return category === 'All'
            ? places
            : places.filter((place) => place.category === category);
    },
});