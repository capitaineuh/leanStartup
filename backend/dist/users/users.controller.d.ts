import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
export declare class UsersController {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(createUserDto: any): Promise<{
        access_token: string;
        user: {
            firstName: string;
            lastName: string;
            email: string;
            phone?: string;
            isArtisan: boolean;
            metier?: string;
            competences?: string[];
            localisation?: string;
            note?: number;
            projetsRealises?: number;
            createdAt: Date;
            toObject: (() => any) & {
                (options: import("mongoose").ToObjectOptions & {
                    virtuals: true;
                }): any;
                (options?: import("mongoose").ToObjectOptions): any;
                <T>(options?: import("mongoose").ToObjectOptions): import("mongoose").Default__v<import("mongoose").Require_id<T>>;
            };
            _id: unknown;
            $locals: Record<string, unknown>;
            $op: "save" | "validate" | "remove" | null;
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            schema: import("mongoose").Schema;
        };
    }>;
    create(createUserDto: any): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    update(id: string, updateUserDto: any): Promise<User | null>;
    remove(id: string): Promise<User | null>;
}
