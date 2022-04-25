import '../App.css';
import { useState } from 'react';
import AuthPage from './AuthPage';
import logo from '../logo.svg';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {
        user ?
          <Routes>
          </Routes>
          :
          <AuthPage />
      }
    </main >
  );
}

export default App;



