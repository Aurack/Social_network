import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostsController} from "../controllers/posts.controller";
import {PostsService} from "../services/posts.service";
import {Posts} from "../entities/posts";

@Module({
    imports: [TypeOrmModule.forFeature([Posts])],
    exports: [TypeOrmModule],
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostsModule {}
