import { AuthService } from './auth.service';
import { RegisterDto } from '../users/dto/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        isArtisan: boolean;
    }>;
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            firstName: any;
            lastName: any;
            isArtisan: any;
        };
    }>;
    getProfile(req: any): any;
}
