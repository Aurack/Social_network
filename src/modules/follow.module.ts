import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {FollowController} from "../controllers/follow.controller";
import {FollowService} from "../services/follow.service";
import {Follow} from "../entities/follow";

@Module({
    imports: [TypeOrmModule.forFeature([Follow])],
    exports: [TypeOrmModule],
    controllers: [FollowController],
    providers: [FollowService],
})
export class FollowModule {}
