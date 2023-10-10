import { instance } from "../api/axios.api";
import { IUserData, IUserDataLog, IUserDataLogResponse } from "../types/types";

export const AuthService = {
    async registration(userData: IUserData) {
        const { data } = await instance.post('person', userData);
        return data
    },
    async login(userData: IUserDataLog): Promise<IUserDataLogResponse> {
        const { data } = await instance.post<IUserDataLogResponse>('auth/login', userData)
        return data
    },
    async getProfile() {
        const { data } = await instance.get('auth/profile');
        if(data) {
            return data
        }
    }
}