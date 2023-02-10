import Navigation from '../components/Navigation';
import Header from '../components/Header';
import DeckViewEdit from '../components/DeckViewEdit';
import { useParams } from 'react-router-dom';



function DeckView() {
  const { deckId } = useParams();

    return (
      // Complete view box
      <div className='w-full h-screen flex flex-row justify-start items-start'> 
        <Navigation />
        <div className='w-10/12 flex flex-col justify-start items-start'>
            <Header 
            title = 'Study'
            />
            <section>
                Deck Body Here
                <DeckViewEdit 
                id={deckId}/>
            </section>
        </div>
      </div>
    );
  }
  
  export default DeckView;