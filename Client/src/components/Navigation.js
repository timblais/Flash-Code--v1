import NavLink from '../components/NavLink'

const Navigation = ({ currentPage }) => {    
    return (
        <nav className='w-3/5 h-16 flex justify-start items-center'>
            <NavLink 
            text = 'Dashboard'
            link = 'dashboard'
            currentPage = {currentPage}
            />
            <NavLink 
            text = 'Decks'
            link = 'decks'
            currentPage = {currentPage}
            />
            <NavLink 
            text = 'Study'
            link = 'study'
            currentPage = {currentPage}
            />
        </nav>
  )
}

export default Navigation;