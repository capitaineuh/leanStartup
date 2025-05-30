import { ArtisansService } from './artisans.service';
export declare class ArtisansController {
    private readonly artisansService;
    constructor(artisansService: ArtisansService);
    findAll(metier?: string, localisation?: string, note?: string): Promise<{
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
