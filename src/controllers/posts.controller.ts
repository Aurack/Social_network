import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { Posts } from '../entities/posts';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    async findAll(): Promise<Posts[]> {
        return this.postsService.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id: number): Promise<Posts> {
        return this.postsService.findById(id);
    }

    @Post()
    async create(@Body() posts: Posts): Promise<Posts> {
        return this.postsService.create(posts);
    }

    @Put(':id')
    async update(@Param() id: number, @Body() posts: Posts): Promise<void> {
        await this.postsService.update(id, posts);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        await this.postsService.delete(id);
    }
}
