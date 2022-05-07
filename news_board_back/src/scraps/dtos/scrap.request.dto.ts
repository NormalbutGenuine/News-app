import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ScrapRequestDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    paragraph: string

    @IsString()
    @IsNotEmpty()
    title: string
}