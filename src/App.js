import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Chat from './Chat';
import BackgroundManager from './backgroundManager';

function App() {
  return (
    <div className="App">
      <Router>
        <BackgroundManager />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
