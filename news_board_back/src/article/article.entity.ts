import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NewsCollection extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    category: string;

    @Column()
    lede: string;

    @Column()
    imgSrc: string;

    @Column()
    newsURL: string;

    @Column()
    body: string;

    @Column()
    date: Date;
}