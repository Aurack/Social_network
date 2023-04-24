import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { Comments } from '../entities/comments';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentService: CommentsService) {}

    @Get()
    async findAll(): Promise<Comments[]> {
        return this.commentService.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id: number): Promise<Comments> {
        return this.commentService.findById(id);
    }

    @Post()
    async create(@Body() comment: Comments): Promise<Comments> {
        return this.commentService.create(comment);
    }

    @Put(':id')
    async update(@Param() id: number, @Body() comment: Comments): Promise<void> {
        await this.commentService.update(id, comment);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        await this.commentService.delete(id);
    }
}
