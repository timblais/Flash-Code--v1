// import Navigation from '../components/Navigation';
// import Header from '../components/Header';
import AuthButton from '../components/buttons/authButton'
// import Body from '../components/Body';

function Root() {
    return (
      // Complete view box
      <div className='w-full h-screen flex flex-row justify-start items-start'> 
          <AuthButton
            purpose = 'Log In'
          />
          <AuthButton
            purpose = 'Sign Up'
          />
      </div>
    );
  }
  
  export default Root;