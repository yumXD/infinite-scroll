import axios from 'axios';
import { Place } from './types';

const API_BASE_URL = 'YOUR_SECRET_KEY';

export const fetchPlaces = async (page: number): Promise<Place[]> => {
    try {
        const response = await axios.get<{ data: Place[] }>(`${API_BASE_URL}/places`, {
            params: { page },
        });
        return response.data.data;
    } catch (error) {
        console.error('Failed to fetch places', error);
        throw error;
    }
};
