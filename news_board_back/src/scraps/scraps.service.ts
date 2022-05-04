import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScrapRequestDto } from './dtos/scrap.request.dto';
import { Scraps } from './repository/scrap.entity';
import { ScrapsRepository } from './repository/scrap.repository';

@Injectable()
export class ScrapsService {
    constructor (@InjectRepository(ScrapsRepository) private scrapsRepository: ScrapsRepository) {}

    async createScrap(body:ScrapRequestDto) {
        const {email, paragraph} = body
        const res = await this.scrapsRepository.findScrapByParagraph(paragraph)
        if (res) throw new UnauthorizedException("이미 해당 문단을 저장하였습니다.")
        return await this.scrapsRepository.saveScrap(email, paragraph)
    }

    async findScraps(token) {
        return await this.scrapsRepository.findAllScrapsByEmail(token.token)
    }

    async deleteScrapService(data) {
        return this.scrapsRepository.deleteScrapRepository(data)
    }
}
