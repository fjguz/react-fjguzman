import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ErrorPage from './pages/404/Error404Page';
import WelcomePage from './pages/welcome/WelcomePage';
import WelcomeDetailPage from './pages/welcomeDetail/WelcomeDetailPage';

type NavigationProps = {};

const App: React.FC<NavigationProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} >
          <Route path="frontend" element={<WelcomeDetailPage />} />
          <Route path="backend" element={<WelcomeDetailPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
