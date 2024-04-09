import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

interface Props {
  imageUrl: string;
  title: string;
  price: number;
  description: string;
}

const PizzaCard = ({ imageUrl, title, price, description }: Props) => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);

  const handleSizeChange = (index: number) => {
    setActiveSize(index);
  };

  const handleTypeChange = (index: number) => {
    setActiveType(index);
  };

  return (
    <div className="max-w-72 border-lightgray rounded-xl border flex flex-col justify-end px-2 py-4 hover:shadow-md transition ease-out duration-200 mr-5 mb-5">
      <img
        src={imageUrl}
        alt=""
        className="mb-0.5 hover:-translate-y-0.5 transition ease-out duration-200"
      />
      <p className="text-2xl text-primary font-medium mb-0.5">{title}</p>
      <p className="leading-5 mb-3">{description}</p>
      <p className="mt-auto">
        <ul className="flex bg-lightgray rounded-xl mb-2 cursor-pointer">
          {[25, 30, 35].map((size, index) => (
            <li
              className={
                activeSize === index
                  ? 'bg-primary flex-1 text-center rounded-xl py-1'
                  : 'flex-1 text-center py-1'
              }
              key={index}
              onClick={() => handleSizeChange(index)}
            >
              {size}см
            </li>
          ))}
        </ul>
        <ul className="flex bg-lightgray rounded-xl mb-5 cursor-pointer">
          {['тонкое', 'традиционное'].map((type, index) => (
            <li
              className={
                activeType === index
                  ? 'bg-primary flex-1 text-center rounded-xl py-1'
                  : 'flex-1 text-center py-1'
              }
              key={index}
              onClick={() => handleTypeChange(index)}
            >
              {type}
            </li>
          ))}
        </ul>
      </p>
      <div className="flex justify-between">
        <p className="text-2xl ml-1.5">{price}руб</p>
        <button className="px-4 py-2 bg-primarylight rounded-xl hover:bg-primary flex items-center gap-x-1 active:translate-y-0.5 transition ease-out duration-200">
          В корзину <FiPlus />
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
