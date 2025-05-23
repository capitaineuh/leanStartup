import { Model } from 'mongoose';
import { Tender } from './schemas/tender.schema';
import { CreateTenderDto } from './dto/create-tender.dto';
import { UpdateTenderDto } from './dto/update-tender.dto';
export declare class TendersService {
    private tenderModel;
    constructor(tenderModel: Model<Tender>);
    create(createTenderDto: CreateTenderDto): Promise<Tender>;
    findAll(): Promise<Tender[]>;
    findOne(id: string): Promise<Tender>;
    update(id: string, updateTenderDto: UpdateTenderDto): Promise<Tender>;
    remove(id: string): Promise<Tender>;
    applyToTender(tenderId: string, userId: string): Promise<Tender>;
}
