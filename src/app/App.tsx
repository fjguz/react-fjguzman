import React from 'react';
import PathProvider, { PathContext } from './context/pathContext';
import Page from './pages/Page';

type NavigationProps = {};

const App: React.FC<NavigationProps> = () => {

  return (
    <PathProvider>
      <Page/>
    </PathProvider>
  )
}

export default App;
