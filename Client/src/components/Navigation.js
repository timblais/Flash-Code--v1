import NavLink from '../components/NavLink'

const Navigation = () => {    
    return (
        <nav className='w-2/12 h-full border-r-4 border-indigo-500 bg-indigo-300 flex flex-col justify-start items-start'>
            <h1 className="w-full text-2xl my-2 pl-4">
                Reflect!
            </h1>
            
            <NavLink 
            text = 'Dashboard'
            link = ''
            />
            <NavLink 
            text = 'To Do List'
            link = 'todo'
            />
            <NavLink 
            text = 'Goals'
            link = 'goals'
            />
            <NavLink 
            text = 'Reflect'
            link = 'reflect'
            />
            <NavLink 
            text = 'Study'
            link = 'study'
            />
        </nav>
  )
}

export default Navigation;