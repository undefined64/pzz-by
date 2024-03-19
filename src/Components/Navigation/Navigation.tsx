import { CiPizza, CiCoffeeCup } from 'react-icons/ci';
import { LiaHamburgerSolid } from 'react-icons/lia';
import { PiBowlFood } from 'react-icons/pi';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="container mx-auto w-custom font-exo text-primary text-2xl font-semibold flex justify-around pt-2 pb-3">
      <ul className="flex justify-center gap-12 ">
        <li className="hover:text-black transition ease-out duration-500 flex flex-row items-center">
          <CiPizza />
          <Link to={`/pzz-by`}>Пиццы</Link>
        </li>
        <li className="hover:text-black transition ease-out duration-500 flex flex-row items-center">
          <LiaHamburgerSolid />
          <Link to={`/pzz-by/burgers`}>Бургеры</Link>
        </li>
        <li className="hover:text-black transition ease-out duration-500 flex flex-row items-center">
          <PiBowlFood />
          <Link to={`/pzz-by/snacks`}>Закуски</Link>
        </li>

        <li className="hover:text-black transition ease-out duration-500 flex flex-row items-center">
          <CiCoffeeCup />
          <Link to={`/pzz-by/drinks`}>Напитки</Link>
        </li>
      </ul>
      <p>
        <Link
          to={`/pzz-by/cart`}
          className="flex items-center gap-1 hover:text-black transition ease-out duration-500"
        >
          <IoCartOutline />
          Корзина
          <span className="text-black">0p</span>
        </Link>
      </p>
    </div>
  );
};

export default Navigation;
