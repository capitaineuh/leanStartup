import { Model } from 'mongoose';
import { User } from '../users/schemas/user.schema';
interface FindAllOptions {
    metier?: string;
    localisation?: string;
    note?: number;
}
export declare class ArtisansService {
    private userModel;
    constructor(userModel: Model<User>);
    findAll(options: FindAllOptions): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        metier: string | undefined;
        competences: string[];
        localisation: string | undefined;
        note: number;
        projetsRealises: number;
    }[]>;
}
export {};
