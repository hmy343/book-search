import React from 'react';
import './App.css';
import MainPage from './page/MainPage';
import AppStateProvider from './providers/AppStateProvider';
import TitleImg from './components/TitleImg';

function App() {
  return (
    <div>
      <AppStateProvider>
        <MainPage />
      </AppStateProvider>
      <TitleImg />
    </div>
  );
}

export default App;

