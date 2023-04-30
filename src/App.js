import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Routes, Route, Router } from 'react-router-dom';
import LoginSignupPage from './components/LoginSignupPage';

function App() {
  return (
  <>
  <Header />
  <LoginSignupPage />
  </>
  );
}

export default App;
