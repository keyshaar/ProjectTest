import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Header from './component/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/><Home/></>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
