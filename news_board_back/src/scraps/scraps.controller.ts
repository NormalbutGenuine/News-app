import { Body, Controller, Delete, Post, Req } from '@nestjs/common';
import { Response } from 'express';
import { ScrapRequestDto } from './dtos/scrap.request.dto';
import { Scraps } from './repository/scrap.entity';
import { ScrapsService } from './scraps.service';

@Controller('scraps')
export class ScrapsController {
    constructor(private readonly scrapsService: ScrapsService) { }
    @Post("")
    async SaveParagraph(
        @Req() req: Response,
        @Body() body: ScrapRequestDto,
    ) {
        const data = await this.scrapsService.createScrap(body)
        req.json(data)
    }

    @Post("/list")
    getScraps(@Body() token): Promise<Scraps[]> {
        return this.scrapsService.findScraps(token)
    }

    @Delete("/delete")
    deleteScrap(@Body() data): Promise<object> {
        return this.scrapsService.deleteScrapService(data)
    }
}
