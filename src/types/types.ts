export interface IUser {
    id: number,
    lastName: string,
    age: number,
    email: string,
    password: string,
    token: string
}

export interface IUserData {
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    password: string
}

export interface IUserDataLog {
    email: string,
    password: string
}

export interface IUserDataLogResponse {
    person: iResponseUserData,
    token: string
}

export interface iResponseUserData {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string
    createdDate: Date;
    id?: number,
}

export interface IPhone {
    id: number,
    img: string,
    name: string,
    memory: number,
    color: string,
    price: number
}

export interface IPhoneCreated {
    img: string,
    name: string,
    memory: number,
    color: string,
    price: number
}