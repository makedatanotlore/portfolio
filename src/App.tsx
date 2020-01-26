import React from 'react';
import logo from './logo.svg';
import { Header } from './features/Header';
import { Category } from './features/Category';
import categories from './assets/categories.json';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      {categories.map(category => (
        <Category {...category} />
      ))}
    </div>
  );
};

export default App;
