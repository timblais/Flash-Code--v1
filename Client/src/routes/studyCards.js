import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import ActiveStudy from '../components/ActiveStudy';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

function StudyCards() {
  
  const { deckId } = useParams();

  return (
      // Complete view box
      <div className='w-full h-screen flex flex-col justify-start items-start'>
            <Header 
            currentPage = 'Study'
            />
            <SubHeader
            title={'Study'}
            />
            <ActiveStudy
              deckId = {deckId}
            />
            <Footer />
        </div>
    );
}
    
  export default StudyCards;