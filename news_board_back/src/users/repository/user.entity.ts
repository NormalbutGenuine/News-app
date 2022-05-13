import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Scraps } from "src/scraps/repository/scrap.entity";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    id: number;

    @Column()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    password: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    name: string;

    // relations
    @OneToMany(() => Scraps, scrap => scrap.email)
    scraps: Scraps[];
}