import { useContext } from 'react';
import Chatbot from './components/chatbot/Chatbot';
import Navbar from "./components/navbar/Navbar";
import { DarkmodeContext } from './context/DarkmodeContext';
import './style.scss';

function App() {

  const {darkmode} = useContext(DarkmodeContext);

  return (
    <div className={`theme-${darkmode ? 'dark' : 'light'}`}>
    <Navbar/>
    <Chatbot/>
    </div>
  );
}

export default App;
