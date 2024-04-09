interface Props {
  imageUrl: string;
  title: string;
  price: number;
  description: string;
  weight: number;
  id: number;
}

const Card = ({ imageUrl, title, price, description, weight }: Props) => {
  return (
    <div className="min-w-72 border-lightgray rounded-xl border flex flex-col px-2 py-4 hover:shadow-md transition ease-out duration-200 mr-5 mb-5">
      <img
        src={imageUrl}
        alt=""
        className="w-60 mb-0.5 hover:-translate-y-0.5 transition ease-out duration-200"
      />
      <p className="text-2xl text-primary font-medium mb-0.5">{title}</p>
      <p className="leading-5 mb-2">{description}</p>
      <p className="leading-5 mb-2">Вес: {weight}г</p>
      <div className="flex justify-between mt-auto">
        <p className="text-2xl ml-1.5">{price}руб</p>
        <button className="px-4 py-2 bg-primarylight rounded-xl hover:bg-primary flex items-center gap-x-1 active:translate-y-0.5 transition ease-out duration-200">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default Card;
