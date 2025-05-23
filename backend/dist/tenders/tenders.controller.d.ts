import { TendersService } from './tenders.service';
import { Tender } from './schemas/tender.schema';
import { CreateTenderDto } from './dto/create-tender.dto';
import { UpdateTenderDto } from './dto/update-tender.dto';
export declare class TendersController {
    private readonly tendersService;
    constructor(tendersService: TendersService);
    create(createTenderDto: CreateTenderDto): Promise<Tender>;
    findAll(): Promise<Tender[]>;
    findOne(id: string): Promise<Tender>;
    update(id: string, updateTenderDto: UpdateTenderDto): Promise<Tender>;
    remove(id: string): Promise<Tender>;
    applyToTender(id: string, userId: string): Promise<Tender>;
}
