import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { VideoService } from '../services/video.service';
import { Video } from '../entities/video';

@Controller('video')
export class VideoController {
    constructor(private readonly videoService: VideoService) {}

    @Get()
    async findAll(): Promise<Video[]> {
        return this.videoService.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id: number): Promise<Video> {
        return this.videoService.findById(id);
    }

    @Post()
    async create(@Body() video: Video): Promise<Video> {
        return this.videoService.create(video);
    }

    @Put(':id')
    async update(@Param() id: number, @Body() video: Video): Promise<void> {
        await this.videoService.update(id, video);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        await this.videoService.delete(id);
    }
}
