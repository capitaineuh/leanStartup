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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtisansService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../users/schemas/user.schema");
let ArtisansService = class ArtisansService {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll(options) {
        const query = {};
        if (options.metier) {
            query.metier = options.metier;
        }
        if (options.localisation) {
            query.localisation = {
                $regex: options.localisation,
                $options: 'i'
            };
        }
        if (options.note) {
            query.note = { $gte: options.note };
        }
        query.role = 'artisan';
        const artisans = await this.userModel.find(query).select({
            _id: 1,
            firstName: 1,
            lastName: 1,
            metier: 1,
            competences: 1,
            localisation: 1,
            note: 1,
            projetsRealises: 1
        });
        return artisans.map(artisan => ({
            id: artisan._id.toString(),
            firstName: artisan.firstName,
            lastName: artisan.lastName,
            metier: artisan.metier,
            competences: artisan.competences || [],
            localisation: artisan.localisation,
            note: artisan.note || 0,
            projetsRealises: artisan.projetsRealises || 0
        }));
    }
};
exports.ArtisansService = ArtisansService;
exports.ArtisansService = ArtisansService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArtisansService);
//# sourceMappingURL=artisans.service.js.map