import './App.css';
import Registration from './Components/Blocks/Registration';
import Header from './Components/ComponentsParts/Headers/Header';
import Login from './Components/Blocks/Login';

import Counter from './Applications/Counter/Counter';
import TempratureControl from './Applications/TempeturesControl/TempratureControl';
import SearchFilter from './Applications/SearchFilter/SearchFilter';
import UserRegistration from './Applications/RegistrationPage/UserRegistration';
import Ticker from './Applications/TimerTicker/Ticker';
import Quizapp from './Applications/QuizApp/Quizapp';
import HeaderTwo from './Components/ComponentsParts/HeaderTwo';
import TokenList from './Applications/SearchFilter/TokenList';
import LoginPage from './Applications/LoginPage/Login';
import TodoList from './Applications/TotoList/TodoList';
import Calculator from './Applications/Calculator/Calculator';
import ContactData from './Applications/ContactList/ContactData';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <HeaderTwo></HeaderTwo> */}
      {/* <Registration></Registration> */}
      {/* <Login></Login> */}
      {/* <Notify></Notify> */}
      {/* <Counter></Counter> */}
      {/* <TempratureControl></TempratureControl> */}
      {/* <SearchFilter></SearchFilter> */}
      {/* <UserRegistration></UserRegistration> */}
      {/* <Ticker></Ticker> */}
      {/* <Quizapp></Quizapp> */}
      {/* <TokenList></TokenList> */}
      {/* <LoginPage></LoginPage> */}
{/*       
      <TodoList></TodoList> */}
      {/* <Calculator></Calculator> */}
      <ContactData></ContactData>
    </div>
  );
}

export default App;
