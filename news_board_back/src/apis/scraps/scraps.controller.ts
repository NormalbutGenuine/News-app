import { Body, Controller, Delete, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ScrapRequestDto } from './dtos/scrap.request.dto';
import { ScrapsService } from './scraps.service';

@Controller('scraps')
export class ScrapsController {
    constructor(private readonly scrapsService: ScrapsService) {}
    @Post("")
    async SaveParagraph(
        @Res() res: Response,
        @Body() body: ScrapRequestDto,
    ) {
        const data = await this.scrapsService.createScrap(body)
        res.json(data)
    }

    @Post("/list")
    async getScraps(
        @Res() res: Response,
        @Body() token
        ) {
        const data = await this.scrapsService.findScraps(token)
        res.json(data)
    }

    @Delete("/delete")
    async deleteScrap(
        @Res() res: Response,
        @Body() data
        )  {
        const response = await this.scrapsService.deleteScrapService(data)
        res.json(response)
    }
}