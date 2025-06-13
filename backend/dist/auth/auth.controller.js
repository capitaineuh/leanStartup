"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("../users/dto/register.dto");
const jwt_auth_guard_1 = require("./strategies/jwt-auth.guard");
let AuthController = AuthController_1 = class AuthController {
    authService;
    logger = new common_1.Logger(AuthController_1.name);
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerDto) {
        try {
            this.logger.debug(`Tentative d'inscription pour l'email: ${registerDto.email}`);
            const { user, isArtisan } = await this.authService.register(registerDto);
            this.logger.debug(`Inscription réussie pour l'email: ${registerDto.email}`);
            return { isArtisan };
        }
        catch (error) {
            this.logger.error(`Erreur lors de l'inscription: ${error.message}`, error.stack);
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Une erreur est survenue lors de l\'inscription',
                details: error.message
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async login(loginDto) {
        try {
            this.logger.debug(`Tentative de connexion pour l'email: ${loginDto.email}`);
            const user = await this.authService.validateUser(loginDto.email, loginDto.password);
            if (!user) {
                throw new common_1.UnauthorizedException('Email ou mot de passe incorrect');
            }
            this.logger.debug(`Connexion réussie pour l'email: ${loginDto.email}`);
            return this.authService.login(user);
        }
        catch (error) {
            this.logger.error(`Erreur lors de la connexion: ${error.message}`, error.stack);
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Une erreur est survenue lors de la connexion',
                details: error.message
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    getProfile(req) {
        return req.user;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
exports.AuthController = AuthController = AuthController_1 = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map