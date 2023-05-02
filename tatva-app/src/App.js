import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom'
import Login from './components/Login';
import Register1 from './components/Register1';
import MainPage from './components/MainPage';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <MainPage ></MainPage>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register1/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
