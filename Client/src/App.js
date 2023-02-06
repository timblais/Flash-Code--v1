import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from './routes/root';
import Dashboard from './routes/dashboard'
import Goals from './routes/goals';
import Reflect from './routes/reflect';
import ToDo from './routes/todo';
import Study from './routes/study';
import DeckView from './routes/deckView';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/goals' element={<Goals />} />
      <Route path='/Reflect' element={<Reflect />} />
      <Route path='/todo' element={<ToDo />} />
      <Route path='/study' element={<Study />} />
      <Route path='/study/:deckName' element={<DeckView />} />
    </Routes>
  );
}

export default App;
