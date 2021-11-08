import { Document } from 'mongoose';
export declare type EstudioDocument = Estudio & Document;
export declare class Estudio {
    id: string;
    nome_estudio: string;
}
export declare const EstudioSchema: import("mongoose").Schema<Document<Estudio, any, any>, import("mongoose").Model<Document<Estudio, any, any>, any, any, any>, {}>;
