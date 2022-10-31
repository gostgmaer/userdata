import logo from './logo.svg';
import './App.css';
import Registration from './Components/Blocks/Registration';
// import Header from './Components/ComponentsParts/Headers/Header';
import Login from './Components/Blocks/Login';
import Notify from './Utils/Notification/notify';
import Counter from './Applications/Counter/Counter';
import TempratureControl from './Applications/TempeturesControl/TempratureControl';
import SearchFilter from './Applications/SearchFilter/SearchFilter';
import UserRegistration from './Applications/RegistrationPage/UserRegistration';
import Ticker from './Applications/TimerTicker/Ticker';
import Quizapp from './Applications/QuizApp/Quizapp';
import HeaderTwo from './Components/ComponentsParts/HeaderTwo';
import TokenList from './Applications/SearchFilter/TokenList';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <HeaderTwo></HeaderTwo>
      {/* <Registration></Registration> */}
      {/* <Login></Login> */}
      {/* <Notify></Notify> */}
      {/* <Counter></Counter> */}
      {/* <TempratureControl></TempratureControl> */}
      {/* <SearchFilter></SearchFilter> */}
      {/* <UserRegistration></UserRegistration> */}
      {/* <Ticker></Ticker> */}
      {/* <Quizapp></Quizapp> */}
      <TokenList></TokenList>
    </div>
  );
}

export default App;
