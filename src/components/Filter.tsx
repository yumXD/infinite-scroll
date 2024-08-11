import React from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {categoryListState, selectedCategoryState} from '../recoil/placeState';
import '../styles/Filter.css';

function Filter() {
    const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);
    const categories = useRecoilValue(categoryListState);

    return (
        <div className="filter-container">
            <label htmlFor="category-filter" className="filter-label">카테코리 별 : </label>
            <select
                id="category-filter"
                className="filter-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="All">전체</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
