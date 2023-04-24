import { Injectable } from '@nestjs/common';
import {Posts} from "../entities/posts";
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Posts)
        private postRepository: Repository<Posts>,
    ) {}

    async findAll(): Promise<Posts[]> {
        return await this.postRepository.find();
    }
    async findById(id: number): Promise<Posts> {
        return this.postRepository.findOneOrFail({where: {id: +id}});
    }

    async create(post: Posts): Promise<Posts> {
        return await this.postRepository.save(post);
    }

    async update(id: number, post: Posts): Promise<void> {
        await this.postRepository.update(id, post);
    }

    async delete(id: number): Promise<void> {
        await this.postRepository.delete(id);
    }
}
