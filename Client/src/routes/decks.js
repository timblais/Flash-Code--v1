import Header from '../components/Header';
import DecksStudyDash from '../components/DecksStudyDash';

function Decks() {
  return (
      // Complete view box
      <div className='w-full h-screen flex flex-col justify-start items-start'>
            <Header 
            currentPage = 'Decks'
            />
            <section>
                Decks Body Here
                <DecksStudyDash />
            </section>
        </div>
    );
  }
  
  export default Decks;