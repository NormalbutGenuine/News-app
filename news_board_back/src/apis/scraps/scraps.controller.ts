import { Body, Controller, Delete, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { ScrapRequestDto } from './dtos/scrap.request.dto';
import { ScrapsService } from './scraps.service';

@Controller('scraps')
@UseGuards(JwtAuthGuard)
export class ScrapsController {
    constructor(private readonly scrapsService: ScrapsService) {}

    @Post("")
    async SaveParagraph(
        @Res() res: Response,
        @Req() req: Request,
        @Body() body: ScrapRequestDto
    ) {
        // @ts-ignore 
        const email = req.user.email
        const data = await this.scrapsService.createScrap(body, email)
        res.json(data)
    }

    @Get("/list")
    async getScraps(
        @Res() res: Response,
        @Req() req: Request
        ) {
        // @ts-ignore
        const email = req.user.email
        const data = await this.scrapsService.findScraps(email)
        res.json(data)
    }

    @Delete("/delete")
    async deleteScrap(
        @Res() res: Response,
        @Req() req: Request,
        @Body() data
        ) {
        // @ts-ignore
        const email = req.user.email
        const paragraph = data.paragraph
        const response = await this.scrapsService.deleteScrapService(email, paragraph)
        res.json(response)
    }
}