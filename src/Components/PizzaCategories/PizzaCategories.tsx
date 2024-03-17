import { useState } from 'react';

const PizzaCategories = () => {
  const categories = ['все', 'мясные', 'вегетарианские', 'острые', 'барбекю'];
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="flex justify-center mb-5">
      <ul className="flex gap-x-6">
        {categories.map((category, index) => (
          <li
            className={
              activeCategory === index
                ? 'text-xl px-4 py-2 rounded-2xl bg-primary cursor-pointer'
                : 'text-xl px-4 py-2 rounded-2xl bg-lightgray cursor-pointer'
            }
            key={index}
            onClick={() => setActiveCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaCategories;
