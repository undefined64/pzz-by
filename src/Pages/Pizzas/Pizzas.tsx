import { useEffect, useState } from 'react';
import PizzaCard from '../../Components/PIzzaCard/PizzaCard';
import PizzaCategories from '../../Components/PizzaCategories/PizzaCategories';

interface Pizza {
  imageUrl: string;
  title: string;
  price: number;
  category: number;
  description: string;
  id: number;
}

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://65f58ab941d90c1c5e09ab25.mockapi.io/pizza')
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto w-custom font-exo">
      <PizzaCategories />
      {isLoading ? (
        <p>Loading...wait</p>
      ) : (
        <div className="flex flex-wrap">
          {pizzas.map((pizza: Pizza) => (
            <PizzaCard key={pizza.id} {...pizza} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pizzas;
