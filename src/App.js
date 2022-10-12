//import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';

function App() {
  let name = prompt("Enetr username", "User");
  document.cookie = `username=${name}`;
  return (
    <div className="App">
      <Home name={name}/>
    </div>
  );
}

export default App;
