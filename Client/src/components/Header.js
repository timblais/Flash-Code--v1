import Logo from "./Logo";
import Navigation from "./Navigation";
import ProfileNav from "./ProfileNav";

const Header = ({ currentPage }) => {    
    return (
        <div className="w-full h-7.5% flex justify-start items-center bg-gray-800 text-gray-300 shadow-md">
            <Logo />
            {/* Mobile Navigation */}
            <div className="w-full h-16 flex justify-end items-center sm:hidden">
                mobile
            </div>

            {/* Browser Navigation */}
            <div className="hidden sm:flex w-full h-16 justify-start items-center">
                <Navigation 
                    currentPage={currentPage}
                />
                <ProfileNav />
            </div>
            
            {/* <h1 >
                {title}
            </h1>
            <AuthButton 
                purpose = 'LOG OUT'
            /> */}
        </div>



    )
}

export default Header;