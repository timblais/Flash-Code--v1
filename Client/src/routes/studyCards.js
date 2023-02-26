import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import StudyDash from '../components/StudyDash';
import Footer from '../components/Footer';

function StudyCards() {
  return (
      // Complete view box
      <div className='w-full h-screen flex flex-col justify-start items-start'>
            <Header 
            currentPage = 'Study'
            />
            <SubHeader
            title={'Study'}
            />
            <section className='h-4/5'>
            </section>
            <Footer />
        </div>
    );
  }
  
  export default StudyCards;