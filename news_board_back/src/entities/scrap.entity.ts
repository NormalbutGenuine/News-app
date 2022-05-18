import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Scraps extends BaseEntity {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    id: number;

    @Column()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    paragraph: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    title: string;

    @Column()
    @IsNotEmpty()
    created_at : Date

    @Column()
    updated_at : Date | null
}