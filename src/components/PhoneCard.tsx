import { FC } from "react";
import { IPhone } from "../types/types";
import { LiaHryvniaSolid } from "react-icons/lia"
import { AiFillDelete } from "react-icons/ai"
import { PhoneService } from "../services/phone.service";
import { toast } from "react-toastify";

interface Props {
    phone: IPhone,
    phones: IPhone[],
    setPhones: (word: IPhone[]) => void;
}
const PhoneCard: FC<Props> = ({ phone, phones, setPhones }) => {
    const deletePhoneHandler = async (id: number) => {
        try {
            await PhoneService.deletePhone(id);
            const newArrayPhones = phones.filter(el => el.id !== id)
            setPhones(newArrayPhones)
            toast.success('Phone has been deleted.');
        } catch (err) {
            toast.error("Something wrong")
        }
    }

    return (
        <div className="p-4 basis-1/4 bg-cyan-300 rounded-md hover:scale-105 border-solid border-2 border-white transition duration-300 ease-out hover:ease-in hover:border-black box-border flex justify-between flex-col relative">
            <img src={phone.img} alt="phone" className="w-full rounded-md mb-2" />
            <div>
                <p className="text-black text-center uppercase">{phone.name + " " + phone.memory + (phone.memory > 5 ? "GB " : "T ") + phone.color}</p>
                <div className="text-black text-center text-lg flex items-center justify-center"><p>{phone.price}</p><LiaHryvniaSolid size={15} /></div>
            </div>
            <button className="absolute bottom-3 right-3" onClick={() => deletePhoneHandler(phone.id)}><AiFillDelete size={20} /></button>
        </div>
    );
}

export default PhoneCard;