import Header from '../components/Header';
import DeckViewEdit from '../components/DeckViewEdit';
import { useParams } from 'react-router-dom';



function DeckView() {
  const { deckId } = useParams();

    return (
      // Complete view box
      <div className='w-full h-screen flex flex-col justify-start items-start'>
            <Header 
            currentPage = 'Decks'
            />
            <section className='w-full'>
                Deck Body Here
                <DeckViewEdit 
                deckId={deckId}/>
            </section>
        </div>
    );
  }
  
  export default DeckView;