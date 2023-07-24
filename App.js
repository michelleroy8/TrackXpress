import './App.css';
import { Navbar } from './Components/Navbar';
import { MainRoutes } from './pages/MainRoutes';
import MapView from './Components/MapView';
import Customerlist from './Components/Customerlist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Customerlist />
      <MapView />
    </div>
  );
}

export default App;
