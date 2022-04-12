import { Injectable } from '@nestjs/common';
import * as fs from "fs";

@Injectable()
export class ArticleService {
    getEconomyNews() {
        const data = fs.readFileSync("./news.json", {encoding: "utf-8"})
        return data
    }
}