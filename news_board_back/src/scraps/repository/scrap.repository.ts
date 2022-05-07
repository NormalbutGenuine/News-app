import * as jwt from "jsonwebtoken";
import { EntityRepository, Repository } from "typeorm";
import { Scraps } from "./scrap.entity";
import { Ipayload } from "src/configs/jwt.payload.config";

@EntityRepository(Scraps)
export class ScrapsRepository extends Repository<Scraps>{

    async findScrapByParagraphAndEmail(text : string, email: string) {
        const decoded_token = jwt.decode(email)
        // @ts-ignore
        const decoded_email = decoded_token.email
        let res = await Scraps.findOne({paragraph: text, email: decoded_email})
        return res
    }
    async saveScrap(token : string, paragraph : string, title: string) {
        const decoded_token = jwt.decode(token)
        // @ts-ignore
        const email = decoded_token.email
        const created_at = new Date()
        const updated_at = new Date()
        // @ts-ignore
        return await Scraps.save<Scraps>({ email : email, paragraph: paragraph, title:title, created_at: created_at, updated_at: updated_at})
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