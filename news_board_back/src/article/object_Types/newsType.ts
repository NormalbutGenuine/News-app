import { IsNotEmpty } from "class-validator";
import { Timestamp } from "typeorm";

export class newsData {
    @IsNotEmpty()
    title: string;
    
    category: string
    lede: string
    imgSrc: string
    newsURL: string
    body: string
    date: Date
}

/**
 * title: string,
 * category: string,
 * lede: string,
 * imgSrc: string,
 * newsURL: string,
 * body: string,
 * date: time
 */
