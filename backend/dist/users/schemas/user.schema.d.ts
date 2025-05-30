import { Document } from 'mongoose';
export type UserDocument = User & Document;
export declare class User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    isArtisan: boolean;
    metier?: string;
    competences?: string[];
    localisation?: string;
    note?: number;
    projetsRealises?: number;
    createdAt: Date;
    toObject(): any;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User, any> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>, {}> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
