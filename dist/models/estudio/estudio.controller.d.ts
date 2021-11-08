import { EstudioDto } from './estudio.dto';
import { EstudioService } from './estudio.service';
export declare class EstudioController {
    private readonly service;
    constructor(service: EstudioService);
    index(): Promise<import("./estudio.schema").Estudio[]>;
    find(id: string): Promise<import("./estudio.schema").Estudio>;
    create(createEstudioDto: EstudioDto): Promise<import("./estudio.schema").Estudio>;
    update(id: string, updateEstudioDto: EstudioDto): Promise<import("./estudio.schema").Estudio>;
    delete(id: string): Promise<import("./estudio.schema").Estudio>;
}
