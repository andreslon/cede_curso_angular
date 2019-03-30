export interface UserModel {
    userId: string;
    name: string;
    lastName: string;
    nit: string;
    nitType: number;
    nitDate: Date;
    contract?: any;
    birthDay: Date;
    userStatus: number;
    genre: number;
    email: string;
    appointments?: any;
}