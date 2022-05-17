import * as jwt from "jsonwebtoken";
import { EntityRepository, Repository } from "typeorm";
import { Scraps } from "./scrap.entity";

@EntityRepository(Scraps)
export class ScrapsRepository extends Repository<Scraps>{

    async findScrapByParagraphAndEmail(text : string, email: string) : Promise<Scraps> {
        let res = await Scraps.findOne({paragraph: text, email: email})
        return res
    }
    async saveScrap(email : string, paragraph : string, title: string) : Promise<Scraps> {
        const created_at = new Date()
        const updated_at = new Date()
        const newScrap = Scraps.create({ email: email, paragraph: paragraph, title: title, created_at: created_at, updated_at: updated_at })
        return await Scraps.save(newScrap)
    }

    async findAllScrapsByEmail(email : string) : Promise<Scraps[]> {
        return await Scraps.find({email: email})
    }

    async deleteScrapRepository(email, paragraph) : Promise<object> {
        return await Scraps.delete({email: email, paragraph: paragraph})
    }
}