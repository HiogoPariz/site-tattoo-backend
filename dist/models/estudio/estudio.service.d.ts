import { Model } from 'mongoose';
import { Estudio, EstudioDocument } from './estudio.schema';
import { EstudioDto } from './estudio.dto';
export declare class EstudioService {
    private estudioModel;
    constructor(estudioModel: Model<EstudioDocument>);
    create(createEstudioDto: EstudioDto): Promise<Estudio>;
    update(id: string, updateEstudioDto: EstudioDto): Promise<Estudio>;
    delete(id: string): Promise<Estudio>;
    findAll(): Promise<Estudio[]>;
    findOne(id: string): Promise<Estudio>;
}
