import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {VideoController} from "../controllers/video.controller";
import {VideoService} from "../services/video.service";
import {Video} from "../entities/video";

@Module({
    imports: [TypeOrmModule.forFeature([Video])],
    exports: [TypeOrmModule],
    controllers: [VideoController],
    providers: [VideoService],
})
export class VideoModule {}
