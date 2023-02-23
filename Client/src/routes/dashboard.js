import Header from '../components/Header';

function Dashboard() {
    return (
      // Complete view box
        <div className='w-full h-screen flex flex-col justify-start items-start'>
            <Header 
            currentPage = 'Dashboard'
            />
            <section>
                Dashboard body here
            </section>
        </div>
    );
  }
  
  export default Dashboard;