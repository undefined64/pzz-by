import { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';

interface Burger {
  imageUrl: string;
  title: string;
  price: number;
  description: string;
  weight: number;
  id: number;
}

const Burgers = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    fetch('https://65f58ab941d90c1c5e09ab25.mockapi.io/burger')
      .then((res) => res.json())
      .then((data) => setBurgers(data));
  }, []);
  return (
    <div className="container mx-auto w-custom font-exo">
      <div className="flex">
        {burgers.map((burger: Burger) => (
          <Card key={burger.id} {...burger} />
        ))}
      </div>
    </div>
  );
};

export default Burgers;
