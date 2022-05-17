import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ScrapRequestDto {

    @IsString()
    @IsNotEmpty()
    paragraph: string

    @IsString()
    @IsNotEmpty()
    title: string
}