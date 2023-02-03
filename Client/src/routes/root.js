import Navigation from '../components/Navigation';
import Header from '../components/Header';
// import Body from '../components/Body';

function Root() {
    return (
      // Complete view box
      <div className='w-full h-screen flex flex-row justify-start items-start'> 
        <Navigation />
        <div className='w-10/12 flex flex-col justify-start items-start'>
            <Header 
            title = 'Dashboard'
            />
            <section>
                Application Body goes Here
            </section>
        </div>
      </div>
    );
  }
  
  export default Root;