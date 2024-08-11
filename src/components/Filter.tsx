import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCategoryState, categoryListState } from '../recoil/placeState';

function Filter() {
    const [category, setCategory] = useRecoilState(selectedCategoryState);
    const categories = useRecoilValue(categoryListState);

    return (
        <div>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="All">All</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
