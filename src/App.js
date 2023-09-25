import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './Chat';
import BackgroundManager from './backgroundManager';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='https://65118e485ed17f2536610187--bucolic-pegasus-1fe35f.netlify.app/'>
        <BackgroundManager />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
