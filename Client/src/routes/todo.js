import Navigation from '../components/Navigation';
import Header from '../components/Header';

function ToDo() {
    return (
      // Complete view box
      <div className='w-full h-screen flex flex-row justify-start items-start'> 
        <Navigation />
        <div className='w-10/12 flex flex-col justify-start items-start'>
            <Header 
            title = 'To Do List'
            />
            <section>
                To Do List Body Here
            </section>
        </div>
      </div>
    );
  }
  
  export default ToDo;