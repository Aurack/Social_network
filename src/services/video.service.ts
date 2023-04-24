import { Injectable } from '@nestjs/common';
import {Video} from "../entities/video";
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";

@Injectable()
export class VideoService {
    constructor(
        @InjectRepository(Video)
        private videoRepository: Repository<Video>,
    ) {}

    async findAll(): Promise<Video[]> {
        return await this.videoRepository.find();
    }
    async findById(id: number): Promise<Video> {
        return this.videoRepository.findOneOrFail({where: {id: +id}});
    }

    async create(video: Video): Promise<Video> {
        return await this.videoRepository.save(video);
    }

    async update(id: number, video: Video): Promise<void> {
        await this.videoRepository.update(id, video);
    }

    async delete(id: number): Promise<void> {
        await this.videoRepository.delete(id);
    }
}
