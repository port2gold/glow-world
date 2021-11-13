import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <div className="App">
     <Sidebar/>
     <Header/>
    </div>
    </Router>
    </>
  );
}

export default App;
