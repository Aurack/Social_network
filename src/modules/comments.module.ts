import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CommentsController} from "../controllers/comments.controller";
import {CommentsService} from "../services/comments.service";
import {Comments} from "../entities/comments";

@Module({
    imports: [TypeOrmModule.forFeature([Comments])],
    exports: [TypeOrmModule],
    controllers: [CommentsController],
    providers: [CommentsService],
})
export class CommentsModule {}
