import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Pizzas from './Pages/Pizzas/Pizzas';

function App() {
  return (
    <div className="">
      <Header />
      <Navigation />
      <Pizzas></Pizzas>
    </div>
  );
}

export default App;
