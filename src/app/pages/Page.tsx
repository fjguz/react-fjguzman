import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PathContext } from '../context/pathContext';
import ErrorPage from './404/Error404Page';
import './Page.scss';
import WelcomePage from './welcome/WelcomePage';
import WelcomeDetailPage from './welcomeDetail/WelcomeDetailPage';

type NavigationProps = {};

const Page: React.FC<NavigationProps> = () => {
  const {path, savePath}= React.useContext(PathContext) as ContextType;
  const newPath: IPath = { path: window.location.pathname}  
  useEffect(() => {
    if (path.path !== newPath.path) {
      savePath(newPath);
    }
  }, [path]);
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

export default Page;
