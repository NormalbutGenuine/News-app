import * as jwt from "jsonwebtoken";
import { EntityRepository, Repository } from "typeorm";
import { Scraps } from "./scrap.entity";

@EntityRepository(Scraps)
export class ScrapsRepository extends Repository<Scraps>{

    async findScrapByParagraphAndEmail(text : string, token: string) : Promise<Scraps> {
        const decoded_token = jwt.decode(token, { json: true })
        const decoded_email = decoded_token.email
        let res = await Scraps.findOne({paragraph: text, email: decoded_email})
        return res
    }
    async saveScrap(token : string, paragraph : string, title: string) : Promise<Scraps> {
        const decoded_token = jwt.decode(token, {json: true})
        const email = decoded_token.email
        const created_at = new Date()
        const updated_at = new Date()
        const newScrap = Scraps.create({ email: email, paragraph: paragraph, title: title, created_at: created_at, updated_at: updated_at })
        return await Scraps.save(newScrap)
    }

    async findAllScrapsByEmail(token : string) : Promise<Scraps[]> {
        const decoded_token = jwt.decode(token, {json: true})
        const email = decoded_token.email
        return await Scraps.find({email: email})
    }

    async deleteScrapRepository(token) : Promise<object> {
        const decoded_token = jwt.decode(token.email, {json: true})
        const email = decoded_token.email
        const paragraph = token.paragraph
        return await Scraps.delete({email: email, paragraph: paragraph})
    }
}