import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { Users } from '../entities/users';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    async findAll(): Promise<Users[]> {
        return this.userService.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id: number): Promise<Users> {
        return this.userService.findById(id);
    }

    @Post()
    async create(@Body() user: Users): Promise<Users> {
        return this.userService.create(user);
    }

    @Put(':id')
    async update(@Param() id: number, @Body() user: Users): Promise<void> {
        await this.userService.update(id, user);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        await this.userService.delete(id);
    }
}
