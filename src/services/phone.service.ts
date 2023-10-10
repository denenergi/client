import { AxiosRequestConfig } from "axios";
import { instance } from "../api/axios.api";
import { IPhoneCreated } from "../types/types";

export const PhoneService = {
    async getAllPhones() {
        const { data } = await instance.get('phone');
        return data
    },

    async postPhone(phone: IPhoneCreated) {
        const { data } = await instance.post('phone', phone);
        return data
    },

    async deletePhone(id: any) {
        const { data } = await instance.delete(`phone/${id}`);
        return data
    },
}