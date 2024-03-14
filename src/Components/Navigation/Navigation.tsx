import { CiPizza, CiCoffeeCup } from 'react-icons/ci';
import { LiaHamburgerSolid } from 'react-icons/lia';
import { PiBowlFood } from 'react-icons/pi';
import { IoCartOutline } from 'react-icons/io5';

const Navigation = () => {
  return (
    <div className="container mx-auto w-custom font-exo text-primary text-2xl font-semibold flex justify-around pt-2">
      <ul className="flex justify-center gap-12 ">
        <li className="hover:text-black transition ease-out duration-500 flex flex-row items-center">
          <CiPizza />
          <a href="">Пиццы</a>
        </li>
        <li className="hover:text-black transition ease-out duration-500 flex flex-row items-center">
          <LiaHamburgerSolid />
          <a href="">Бургеры</a>
        </li>
        <li className="hover:text-black transition ease-out duration-500 flex flex-row items-center">
          <PiBowlFood />
          <a href="">Закуски</a>
        </li>

        <li className="hover:text-black transition ease-out duration-500 flex flex-row items-center">
          <CiCoffeeCup />
          <a href="">Напитки</a>
        </li>
      </ul>
      <p>
        <a
          href=""
          className="flex items-center gap-1 hover:text-black transition ease-out duration-500"
        >
          <IoCartOutline />
          Корзина
          <span className="">0p</span>
        </a>
      </p>
    </div>
  );
};

export default Navigation;
