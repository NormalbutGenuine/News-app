import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ScrapRequestDto } from './dtos/scrap.request.dto';
import { ScrapsService } from './scraps.service';

@Controller('scraps')
export class ScrapsController {
    constructor(private readonly scrapsService: ScrapsService) {}
    @Post("")
    async SaveParagraph(@Body() body:ScrapRequestDto) {
        console.log(body)
        return await this.scrapsService.createScrap(body)
    }

    @Post("/list")
    getScraps(@Body() token : string) {
        return this.scrapsService.findScraps(token)
    }

    @Delete("/delete")
    deleteScrap(@Body() data) {
        return this.scrapsService.deleteScrapService(data)
    }
}
