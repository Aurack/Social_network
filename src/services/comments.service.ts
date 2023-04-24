import { Injectable } from '@nestjs/common';
import {Comments} from "../entities/comments";
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comments)
        private commentRepository: Repository<Comments>,
    ) {}

    async findAll(): Promise<Comments[]> {
        return await this.commentRepository.find();
    }
    async findById(id: number): Promise<Comments> {
        return this.commentRepository.findOneOrFail({where: {id: +id}});
    }

    async create(comment: Comments): Promise<Comments> {
        return await this.commentRepository.save(comment);
    }

    async update(id: number, comment: Comments): Promise<void> {
        await this.commentRepository.update(id, comment);
    }

    async delete(id: number): Promise<void> {
        await this.commentRepository.delete(id);
    }
}
