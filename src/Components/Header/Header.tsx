const Header = () => {
  return (
    <div className="bg-[url('/header-bg.gif')] bg-center font-exo">
      <div className="container mx-auto py-4 flex flex-row text-white justify-evenly w-custom">
        <div className="flex flex-col w-1/6 items-center">
          <p className="text-4xl font-bold">45 минут</p>
          <p className="text-xl text-center font-bold">или пицца бесплатно</p>
          <p className="text-center text-sm">
            если мы не успеем доставить вы получите одну пиццу из заказа
            бесплатно
          </p>
        </div>
        <a className="w-1/5 self-center" href="#">
          <img
            className="hover:scale-105 transition ease-out duration-300"
            src="./main-logo.svg"
            alt="logo"
          />
        </a>
        <div className="flex flex-col items-center justify-center transition ease-out duration-300">
          <p>A1 МТС</p>
          <a className="text-4xl font-bold" href="tel:+375297556655">
            755-66-55
          </a>
          <p>10:00 - 02:00</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
