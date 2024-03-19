import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
