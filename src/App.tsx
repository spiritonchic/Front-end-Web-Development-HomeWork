import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './style.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Comics from './components/Comics';
import Header from './components/Header';
import SocialIcons from './components/SocialIcons';

const App: React.FC = () => {
  return (
    <Router basename="/Front-end-Web-Development-HomeWork">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/comics" element={<Comics email="i.ershov@innopolis.university" />} />
      </Routes>
      <SocialIcons />
    </Router>
  );
};

export default App;