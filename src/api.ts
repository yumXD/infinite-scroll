import axios from 'axios';
import { Place } from './types';

const API_BASE_URL = 'YOUR_SECRET_KEY';

export const fetchPlaces = async (page: number): Promise<Place[]> => {
    try {
        const response = await axios.get<{ data: Place[] }>(`${API_BASE_URL}/places`, {
            params: { page },
        });
        const places = response.data.data;

        // 중복 제거: name을 기준으로 중복된 항목 필터링
        const uniquePlaces = places.filter((place: Place, index: number, self: Place[]) =>
            index === self.findIndex((p) => p.name === place.name)
        );

        return uniquePlaces;
    } catch (error) {
        console.error('Failed to fetch places', error);
        throw error;
    }
};
