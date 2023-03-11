import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import ProfileBody from '../components/ProfileBody';
import { Helmet } from 'react-helmet-async';

function Profile() {
  return (
      // Complete view box
      <div className='w-full h-screen flex flex-col justify-start items-start'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <Header 
            currentPage = 'Profile'
            />
            <SubHeader
            title={'Profile'}
            />
            <section className='h-4/5'>
                <ProfileBody />
            </section>
            <Footer />
        </div>
    );
  }
  
  export default Profile;