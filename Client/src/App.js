import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Root from './routes/root';
import Dashboard from './routes/dashboard'
import Study from './routes/study';
import StudyCards from "./routes/studyCards";
import Decks from './routes/decks'
import DeckView from './routes/deckView';
import Profile from "./routes/profile";
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
      <Route path='/study' element={<AuthCheck component={Study} />} />
      <Route path='/study/studying/:deckId' element={<AuthCheck component={StudyCards} />} />
      <Route path='/decks' element={<AuthCheck component={Decks} />} />
      <Route path='/decks/view/:deckId' element={<AuthCheck component={DeckView} />} />
      <Route path='/profile' element={<AuthCheck component={Profile} />} />
    </Routes>
  );
}

export default App;
