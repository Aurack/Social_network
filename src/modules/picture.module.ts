import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PictureController} from "../controllers/picture.controller";
import {PictureService} from "../services/picture.service";
import {Picture} from "../entities/picture";

@Module({
    imports: [TypeOrmModule.forFeature([Picture])],
    exports: [TypeOrmModule],
    controllers: [PictureController],
    providers: [PictureService],
})
export class PictureModule {}
