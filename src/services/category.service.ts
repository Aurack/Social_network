import { Injectable } from '@nestjs/common';
import {Category} from "../entities/category";
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ) {}

    async findAll(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }
    async findById(id: number): Promise<Category> {
        return this.categoryRepository.findOneOrFail({where: {id: +id}});
    }

    async create(category: Category): Promise<Category> {
        return await this.categoryRepository.save(category);
    }

    async update(id: number, category: Category): Promise<void> {
        await this.categoryRepository.update(id, category);
    }

    async delete(id: number): Promise<void> {
        await this.categoryRepository.delete(id);
    }
}
