import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import EventExample from './components/EventExample';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import TodosPage from './pages/TodosPage';
import { Link } from 'react-router-dom';

const App = () => {
  
  return (
    <BrowserRouter>
    <Link to={'/users'}>Пользователи</Link>
    <Link to={'/todos'}>Список дел</Link>
      <Routes>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/todos" element={<TodosPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
