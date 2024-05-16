export interface IUser {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    points : number;
    cash : number;
}

export interface IToken {
    token : string;
    expiresAt : number;
}