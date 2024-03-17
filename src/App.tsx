import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Pizzas from './Pages/Pizzas/Pizzas';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <div className="">
      <Header />
      <Navigation />
      {/* <Pizzas /> */}
      <Cart />
    </div>
  );
}

export default App;
