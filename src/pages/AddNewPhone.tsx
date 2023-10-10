import { FC, useRef, useState } from "react";
import { toast } from "react-toastify";
import { PhoneService } from "../services/phone.service";

const AddNewPhone: FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState<number | string>('');
    const [memory, setMemory] = useState<number | string>('');
    const [color, setColor] = useState('');
    const [file, setFile] = useState<string | ArrayBuffer | null>();
    const refFile = useRef(null);

    const imageChange = (e: any) => {
        const data = new FileReader();
        data.addEventListener('load', () => {
            setFile(data.result)
        })

        data.readAsDataURL(e.target.files[0])
    };

    const addPhoneHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if (file && typeof(price) === 'number' && typeof(memory) === "number") {
                const data = await PhoneService.postPhone({ name, price, memory, color, img: file.toString() });
                if (data) {
                    toast.success('Phone has been added.');
                }
                setName('')
                setPrice('')
                setMemory('')
                setColor('')
                setFile('')
                if (refFile.current) {
                    refFile.current.value = "";
                }
            }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error)
        }
    }

    return (
        <div className="flex flex-col p-2 justify-center">
            <h1 className="text-center mb-5 text-lg">Add new phone</h1>
            <form className="flex flex-col gap-3" onSubmit={addPhoneHandler}>
                <input type="text" className="input" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required/>
                <input type="number" className="input" placeholder="Price" value={price} onChange={e => setPrice(+e.target.value)} required />
                <input type="number" className="input" placeholder="Memory" value={memory} onChange={e => setMemory(+e.target.value)} required />
                <input type="text" className="input" placeholder="Color" value={color} onChange={e => setColor(e.target.value)} required />
                <input type="file" className="input" accept="image/png, image/jpeg" onChange={imageChange} required ref={refFile}/>
                {file && (
                    <div className="h-96 flex justify-center">
                        <img
                            className="object-contain h-96"
                            src={file?.toString()}
                            alt="image"
                        />
                    </div>
                )}
                <button className="btn btn-green mx-auto">Add</button>
            </form>
        </div>
    );
}

export default AddNewPhone;