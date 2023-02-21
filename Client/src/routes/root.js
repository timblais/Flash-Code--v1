// import Navigation from '../components/Navigation';
// import Header from '../components/Header';
import AuthButton from '../components/buttons/authButton'
// import Body from '../components/Body';

function Root() {
    return (
      // Complete view box
      <div className='w-full h-screen flex flex-row justify-start items-start bg-landing bg-right-top bg-cover'> 
        <div className='w-3/5 flex flex-col justify-start items-center'>
          <h1 className='text-7xl font-cutiveMono m-5'>FLASH CODE</h1>
          <div className='flex flex-row'>
            <AuthButton
              purpose = 'LOG IN'
            />
            <AuthButton
              purpose = 'SIGN UP'
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Root;