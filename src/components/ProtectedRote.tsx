import { FC } from "react";
import useAuth from "../hooks/useAuth";

interface Props {
    children: JSX.Element
}
const ProtectedRote: FC<Props> = ({ children }) => {
    const isAuth = useAuth()
    return (
        (isAuth ? children : (
            <div className="mt-20 flex flex-col justify-center items-center gap-10">
                <h1 className="text-2xl">You must be Logged!</h1>
            </div>
        ))
    );
}

export default ProtectedRote; 