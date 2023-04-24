import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FollowService } from '../services/follow.service';
import { Follow } from '../entities/follow';

@Controller('follow')
export class FollowController {
    constructor(private readonly followService: FollowService) {}

    @Get()
    async findAll(): Promise<Follow[]> {
        return this.followService.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id: number): Promise<Follow> {
        return this.followService.findById(id);
    }

    @Post()
    async create(@Body() follow: Follow): Promise<Follow> {
        return this.followService.create(follow);
    }

    @Put(':id')
    async update(@Param() id: number, @Body() follow: Follow): Promise<void> {
        await this.followService.update(id, follow);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        await this.followService.delete(id);
    }
}
