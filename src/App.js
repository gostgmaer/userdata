import logo from './logo.svg';
import './App.css';
import Registration from './Components/Blocks/Registration';
import Header from './Components/ComponentsParts/Header';
import Login from './Components/Blocks/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Registration></Registration> */}
      <Login></Login>
    </div>
  );
}

export default App;
