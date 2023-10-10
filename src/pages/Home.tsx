import { FC } from "react";
import img from "../assets/phones.png"

const Home: FC = () => {
    return (
        <div className="flex justify-center p-10 flex-col">
            <img src={img} alt="phones" className="mb-10"/>
            <p className="text-5xl text-center">Welcome to the site of expensive smartphones!</p>
        </div>
    );
}

export default Home;