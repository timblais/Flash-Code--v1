import Footer from '../components/Footer';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader'

function Dashboard() {
    return (
      // Complete view box
        <div className='w-full h-screen flex flex-col justify-start items-start'>
            <Header 
            currentPage = 'Dashboard'
            />
            <SubHeader
            title={'Dashboard'}
            />
            <section className='h-4/5'>
                Dashboard body here
            </section>
            <Footer />
        </div>
    );
  }
  
  export default Dashboard;