import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import DeckViewEdit from '../components/DeckViewEdit';
import { useParams } from 'react-router-dom';

function DeckView() {
  const { deckId } = useParams();

    return (
      // Complete view box
      <div className='w-full h-full flex flex-col justify-start items-start'>
            <Header 
            currentPage = 'Decks'
            />
            <SubHeader
            title={'View/Edit Cards'}
            />
            <section className='w-full h-4/5'>
                <DeckViewEdit 
                deckId={deckId}/>
            </section>
            <Footer />
        </div>
    );
  }
  
  export default DeckView;