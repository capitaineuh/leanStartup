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
exports.TendersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tender_schema_1 = require("./schemas/tender.schema");
let TendersService = class TendersService {
    tenderModel;
    constructor(tenderModel) {
        this.tenderModel = tenderModel;
    }
    async create(createTenderDto) {
        const createdTender = new this.tenderModel(createTenderDto);
        return createdTender.save();
    }
    async findAll() {
        return this.tenderModel.find().exec();
    }
    async findOne(id) {
        const tender = await this.tenderModel.findById(id).exec();
        if (!tender) {
            throw new common_1.NotFoundException(`Tender with ID ${id} not found`);
        }
        return tender;
    }
    async update(id, updateTenderDto) {
        const tender = await this.tenderModel
            .findByIdAndUpdate(id, updateTenderDto, { new: true })
            .exec();
        if (!tender) {
            throw new common_1.NotFoundException(`Tender with ID ${id} not found`);
        }
        return tender;
    }
    async remove(id) {
        const tender = await this.tenderModel.findByIdAndDelete(id).exec();
        if (!tender) {
            throw new common_1.NotFoundException(`Tender with ID ${id} not found`);
        }
        return tender;
    }
    async applyToTender(tenderId, userId) {
        const tender = await this.tenderModel
            .findByIdAndUpdate(tenderId, { $addToSet: { applicants: userId } }, { new: true })
            .exec();
        if (!tender) {
            throw new common_1.NotFoundException(`Tender with ID ${tenderId} not found`);
        }
        return tender;
    }
};
exports.TendersService = TendersService;
exports.TendersService = TendersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tender_schema_1.Tender.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TendersService);
//# sourceMappingURL=tenders.service.js.map