import { Document } from 'mongoose';
export declare class Tender extends Document {
    title: string;
    description: string;
    budget: number;
    deadline: Date;
    location: string;
    category: string;
    clientId: string;
    status: 'OPEN' | 'CLOSED' | 'AWARDED';
    applicants: string[];
}
export declare const TenderSchema: import("mongoose").Schema<Tender, import("mongoose").Model<Tender, any, any, any, Document<unknown, any, Tender, any> & Tender & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Tender, Document<unknown, {}, import("mongoose").FlatRecord<Tender>, {}> & import("mongoose").FlatRecord<Tender> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
