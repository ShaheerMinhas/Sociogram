import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LoginSignupPage from './components/LoginSignupPage';
import Dashboard from './components/Dashboard';
import Explore from './components/Explore';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Meetnewpeeps from './components/Meetnewpeeps';
import profilepage from './components/Profilepage';
function App() {
  return (
  <>
  <div className="Ap" style ={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(-45deg, #ffff, #fff2, #53E0E0, #d2ba83)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
      
}}>
  <Header />
 
 <Router>
  <Routes>
  <Route path="/" element ={<LoginSignupPage />}/>
  <Route path="/Dashboard" element ={<Dashboard />}/>
  <Route path="/Explore" element ={<Explore />}/>
  <Route path="/MeetNew" element ={<Meetnewpeeps />}/>
  <Route path="/Profile" element ={<profilepage />}/>
  
  </Routes>
  </Router>   
  </div>
  
  </>
  );
}

export default App;
