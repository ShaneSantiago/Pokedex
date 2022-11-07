import logo from './logo.svg';
import './App.css';
import Routers from './Routers/Routers';
import GlobalState from './Components/GlobalContext/GlobalState';


function App() {

  return (
    <GlobalState>
      <Routers />
    </GlobalState>
  );
}

export default App;
