import logo from './logo.svg';
import './App.css';
import Registration from './Components/Blocks/Registration';
import Header from './Components/ComponentsParts/Header';
import Login from './Components/Blocks/Login';
import Notify from './Utils/Notification/notify';
import Counter from './Applications/Counter/Counter';
import TempratureControl from './Applications/TempeturesControl/TempratureControl';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Registration></Registration> */}
      {/* <Login></Login> */}
      {/* <Notify></Notify> */}
      {/* <Counter></Counter> */}
      <TempratureControl></TempratureControl>
    </div>
  );
}

export default App;
