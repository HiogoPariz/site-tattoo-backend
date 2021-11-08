import { isNumber, isString } from "class-validator";

export class EstudioDto {

    // @isNumber()
    id: number;

    // @isString()
    nomeEstudio: string;
}
