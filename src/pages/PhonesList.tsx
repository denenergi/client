import { useEffect, useState } from "react";
import { PhoneService } from "../services/phone.service";
import { IPhone } from "../types/types";
import PhoneCard from "../components/PhoneCard";

const PhoneList = () => {
    const [phones, setPhones] = useState<IPhone[] | []>([])
    useEffect(() => {
        PhoneService.getAllPhones().then(res => setPhones(res));
    }, [])
    return (
        <div className="flex p-2 m-2 flex-col items-center">
            <h1>iPHONES</h1>
            <div className="flex p-2 gap-x-1 gap-y-10 flex-row w-full flex-wrap justify-around">
                {phones.map(el => <PhoneCard phone={el} phones={phones} setPhones={setPhones} key={el.id}/>)}
            </div>
        </div>
    );
}

export default PhoneList;