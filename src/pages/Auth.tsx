import { FC, useState } from "react";
import { AuthService } from "../services/auth.service";
import { toast } from "react-toastify";
import { setTokenToLocalStorage } from "../helpers/localstorage.helper";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/person/personSlice";
import { useNavigate } from "react-router-dom";

const Auth: FC = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const data = await AuthService.login({ email, password })
            if(data) {
                setTokenToLocalStorage('token', data.token)
                dispatch(login(data))
                toast.success('You logged in')
                navigate('/')
            }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }

    const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = await AuthService.registration({ firstName, lastName, age, email, password });
            if (data) {
                toast.success('Account has been created.');
                setIsLogin(!isLogin)
            }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error)
        }
    }

    return (
        <div className="mt-40 flex flex-col justify-center bg-slate-900 text-white">
            <h1 className="mb-5 text-center text-xl">
                {isLogin ? 'Login' : 'Registration'}
            </h1>

            <form className="flex w-1/3 flex-col mx-auto gap-5" onSubmit={!isLogin ? registrationHandler : loginHandler}>
                {!isLogin && <input type="text" className="input" placeholder="Firstname" onChange={e => setFirstName(e.target.value)} />}
                {!isLogin &&<input type="text" className="input" placeholder="Last name" onChange={e => setLastName(e.target.value)} />}
                {!isLogin &&<input type="number" className="input" placeholder="Age" onChange={e => setAge(+e.target.value)} />}
                <input type="text" className="input" placeholder="Email" onChange={e => setEmail(e.target.value)} autoComplete="new-password"/>
                <input type="password" className="input" placeholder="Password" onChange={e => setPassword(e.target.value)} autoComplete="new-password"/>

                <button className="btn btn-green mx-auto">Submit</button>
            </form>

            <div className="flex justify-center mt-5">
                {isLogin ? (
                    <button
                        className="text-slate-300 hover:text-white"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        You don't have an account?
                    </button>
                ) : (
                    <button
                        className="text-slate-300 hover:text-white"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        Already have an account?
                    </button>
                )}
            </div>
        </div>
    )
}

export default Auth;