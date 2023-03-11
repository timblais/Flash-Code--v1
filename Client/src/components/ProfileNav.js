import { Link } from "react-router-dom";

const ProfileNav = () => {    
    return (
        <button className="w-2/5 flex justify-end items-center text-3xl mx-3 p-1">
            <Link to='/profile'>
                <span className="material-symbols-outlined">
                    account_circle
                </span>
            </Link>
        </button>

    )
}

export default ProfileNav;