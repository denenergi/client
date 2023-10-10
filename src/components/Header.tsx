import { FC } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"
import { PiAppleLogo } from "react-icons/pi"
import useAuth from "../hooks/useAuth";
import { useAppDispatch } from "../store/hooks";
import { logout } from "../store/person/personSlice";
import { removeTokenFromLocalStorage } from "../helpers/localstorage.helper";
import { toast } from "react-toastify";

const Header: FC = () => {
    const isAuth = useAuth()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout())
        removeTokenFromLocalStorage('token')
        toast.success('You logged out.')
        navigate('/')
    }
    return (
        <header className="flex items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm">
            <Link to="/">
                <PiAppleLogo size={30} className="transition duration-300 ease-out hover:ease-in hover:scale-125"/>
            </Link>

            {isAuth && (
                <nav className="ml-auto mr-10">
                    <ul className="flex items-center gap-5">
                        <li>
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-white' : "text-white/50"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/phoneList'} className={({ isActive }) => isActive ? 'text-white' : "text-white/50"}>Phone list</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/addNewPhone'} className={({ isActive }) => isActive ? 'text-white' : "text-white/50"}>Add new phone</NavLink>
                        </li>
                    </ul>
                </nav>
            )}
            {
                isAuth ? (
                    <button className="btn btn-red" onClick={logoutHandler}>
                        <span>Log Out</span>
                        <FaSignOutAlt />
                    </button>
                ) : (
                    <Link className="ry-2 text-white/50 hover:text-white ml-auto" to={'auth'}>
                        Log In / Sign In
                    </Link>
                )
            }
        </header>
    );
}

export default Header;