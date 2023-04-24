import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PictureService } from '../services/picture.service';
import { Picture } from '../entities/picture';

@Controller('picture')
export class PictureController {
    constructor(private readonly pictureService: PictureService) {}

    @Get()
    async findAll(): Promise<Picture[]> {
        return this.pictureService.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id: number): Promise<Picture> {
        return this.pictureService.findById(id);
    }

    @Post()
    async create(@Body() picture: Picture): Promise<Picture> {
        return this.pictureService.create(picture);
    }

    @Put(':id')
    async update(@Param() id: number, @Body() picture: Picture): Promise<void> {
        await this.pictureService.update(id, picture);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        await this.pictureService.delete(id);
    }
}
