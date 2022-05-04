import * as jwt from "jsonwebtoken";
import { EntityRepository, Repository } from "typeorm";
import { Scraps } from "./scrap.entity";
import { Ipayload } from "src/configs/jwt.payload.config";

@EntityRepository(Scraps)
export class ScrapsRepository extends Repository<Scraps>{

    async findScrapByParagraph(text : string) {
        let res = await Scraps.findOne({paragraph: text})
        return res
    }
    async saveScrap(token : string, paragraph : string) {
        const decoded_token : Ipayload = JSON.parse(String(jwt.decode(token)))
        const email : string = decoded_token.email
        const created_at : Date = new Date()
        const updated_at : Date = new Date()
        // @ts-ignore
        return await Scraps.save<Scraps>({ email : email, paragraph: paragraph, created_at: created_at, updated_at: updated_at})
    }

    async findAllScrapsByEmail(token) {
        const decoded_token = jwt.decode(token)
        // @ts-ignore
        const email = decoded_token.email
        return await Scraps.find({email: email})
    }

    async deleteScrapRepository(data) {
        const decoded_token = jwt.decode(data.email)
        // @ts-ignore
        const email = decoded_token.email
        const paragraph = data.paragraph
        return await Scraps.delete({email: email, paragraph: paragraph})
    }
}