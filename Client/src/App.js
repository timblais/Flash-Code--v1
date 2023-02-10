import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Root from './routes/root';
import Dashboard from './routes/dashboard'
import Goals from './routes/goals';
import Reflect from './routes/reflect';
import ToDo from './routes/todo';
import Study from './routes/study';
import DeckView from './routes/deckView';
import Loading from './components/Loading'
import AuthCheck from "./components/AuthCheck";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  
  
  return (
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/dashboard' element={<AuthCheck component={Dashboard} />} />
      <Route path='/goals' element={<AuthCheck component={Goals} />} />
      <Route path='/Reflect' element={<AuthCheck component={Reflect} />} />
      <Route path='/todo' element={<AuthCheck component={ToDo} />} />
      <Route path='/study' element={<AuthCheck component={Study} />} />
      <Route path='/study/view/:deckId' element={<AuthCheck component={DeckView} />} />
    </Routes>
  );
}

export default App;
