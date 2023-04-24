import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { Category } from '../entities/category';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    async findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id: number): Promise<Category> {
        return this.categoryService.findById(id);
    }

    @Post()
    async create(@Body() category: Category): Promise<Category> {
        return this.categoryService.create(category);
    }

    @Put(':id')
    async update(@Param() id: number, @Body() category: Category): Promise<void> {
        await this.categoryService.update(id, category);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        await this.categoryService.delete(id);
    }
}
