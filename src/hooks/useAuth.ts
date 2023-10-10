import { useAppSelector } from "../store/hooks";

const useAuth = () => {
    const isAuth = useAppSelector(state => state.user.isAuth)

    return isAuth
}
 
export default useAuth;