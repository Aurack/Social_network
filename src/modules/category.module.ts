import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CategoryController} from "../controllers/category.controller";
import {CategoryService} from "../services/category.service";
import {Category} from "../entities/category";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    exports: [TypeOrmModule],
    controllers: [CategoryController],
    providers: [CategoryService],
})
export class CategoryModule {}
