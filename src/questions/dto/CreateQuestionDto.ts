import { IsNotEmpty, IsArray, IsString, ArrayMaxSize, ArrayMinSize } from "class-validator";
import {Type} from 'class-transformer'




export class CreateQuestionDto {

    @IsNotEmpty()
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    @IsArray()
    @IsString({ each: true })
    texts: string[];
}