import Navigation from '../components/Navigation';
import Header from '../components/Header';
import DecksStudyDash from '../components/DecksStudyDash';

function Study() {
  return (
      // Complete view box
      <div className='w-full h-screen flex flex-row justify-start items-start'> 
        <Navigation />
        <div className='w-10/12 flex flex-col justify-start items-start'>
            <Header 
            title = 'Study'
            />
            <section>
                Study Body Here
                {/* <code classname='block h-52' contenteditable='true'>
                    write your code here
                </code> */}
                <DecksStudyDash />
            </section>
        </div>
      </div>
    );
  }
  
  export default Study;