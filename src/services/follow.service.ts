import { Injectable } from '@nestjs/common';
import {Follow} from "../entities/follow";
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";

@Injectable()
export class FollowService {
    constructor(
        @InjectRepository(Follow)
        private followRepository: Repository<Follow>,
    ) {}

    async findAll(): Promise<Follow[]> {
        return await this.followRepository.find();
    }
    async findById(id: number): Promise<Follow> {
        return this.followRepository.findOneOrFail({where: {id: +id}});
    }

    async create(follow: Follow): Promise<Follow> {
        return await this.followRepository.save(follow);
    }

    async update(id: number, follow: Follow): Promise<void> {
        await this.followRepository.update(id, follow);
    }

    async delete(id: number): Promise<void> {
        await this.followRepository.delete(id);
    }
}
