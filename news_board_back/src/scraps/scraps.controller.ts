import { Body, Controller, Delete, Post } from '@nestjs/common';
import { ScrapRequestDto } from './dtos/scrap.request.dto';
import { Scraps } from './repository/scrap.entity';
import { ScrapsService } from './scraps.service';

@Controller('scraps')
export class ScrapsController {
    constructor(private readonly scrapsService: ScrapsService) {}
    @Post("")
    async SaveParagraph(@Body() body:ScrapRequestDto) : Promise<Scraps> {
        return await this.scrapsService.createScrap(body)
    }

    @Post("/list")
    getScraps(@Body() token) : Promise<Scraps[]>{
        return this.scrapsService.findScraps(token)
    }

    @Delete("/delete")
    deleteScrap(@Body() data) : Promise<object> {
        return this.scrapsService.deleteScrapService(data)
    }
}
