import React, {useEffect ,useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './container/Header';
import Card from './container/Card';
import Footer from './container/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    document.body.className = theme; // Change the body class
  }, [theme]);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
      <div className={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} /></div>
        <Card />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
