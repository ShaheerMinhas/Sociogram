import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LoginSignupPage from './components/LoginSignupPage';
import Dashboard from './components/Dashboard';
import Explore from './components/Explore';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Meetnewpeeps from './components/Meetnewpeeps';
import Profilepage from './components/Profilepage';
function App() {
  return (
  <>
  <div className="Ap" style ={{
       
      
}}>
  <Header />
 
 <Router>
  <Routes>
  <Route path="/" element ={<LoginSignupPage />}/>
  <Route path="/Dashboard" element ={<Dashboard />}/>
  <Route path="/Explore" element ={<Explore />}/>
  <Route path="/MeetNew" element ={<Meetnewpeeps />}/>
  <Route path="/Profile" element ={<Profilepage />}/>
  
  </Routes>
  </Router>   
  </div>
  
  </>
  );
}

export default App;
