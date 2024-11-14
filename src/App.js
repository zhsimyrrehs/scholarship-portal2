// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Scholarship from './pages/Scholarship';
import About from './pages/About';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/scholarships" element={<Scholarship />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
