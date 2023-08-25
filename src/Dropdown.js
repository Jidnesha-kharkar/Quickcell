import React, { useState } from 'react';

const categories = [
  {
    name: 'Grouping',
    subcategories: ['Status', 'User', 'Priority'],
  },
  {
    name: 'Ordering',
    subcategories: ['Status', 'User', 'Priority'],
  }
];


function Dropdown() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const selectedCategoryData = categories.find(
    (category) => category.name === selectedCategory
  );

  return (
    <div>
      
      <div>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCategory && (
        <div>
          <select
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
          >
            <option value="">Select Subcategory</option>
            {selectedCategoryData.subcategories.map((subcategory, index) => (
              <option key={index} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
