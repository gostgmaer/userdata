import logo from './logo.svg';
import './App.css';
import Registration from './Components/Blocks/Registration';
import Header from './Components/ComponentsParts/Header';
import Login from './Components/Blocks/Login';
import Notify from './Utils/Notification/notify';
import Counter from './Applications/Counter/Counter';
import TempratureControl from './Applications/TempeturesControl/TempratureControl';
import SearchFilter from './Applications/SearchFilter/SearchFilter';
import UserRegistration from './Applications/RegistrationPage/UserRegistration';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Registration></Registration> */}
      {/* <Login></Login> */}
      {/* <Notify></Notify> */}
      {/* <Counter></Counter> */}
      {/* <TempratureControl></TempratureControl> */}
      {/* <SearchFilter></SearchFilter> */}
      <UserRegistration></UserRegistration>
    </div>
  );
}

export default App;
