import { Injectable } from '@nestjs/common';
import {Picture} from "../entities/picture";
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";

@Injectable()
export class PictureService {
    constructor(
        @InjectRepository(Picture)
        private pictureRepository: Repository<Picture>,
    ) {}

    async findAll(): Promise<Picture[]> {
        return await this.pictureRepository.find();
    }
    async findById(id: number): Promise<Picture> {
        return this.pictureRepository.findOneOrFail({where: {id: +id}});
    }

    async create(picture: Picture): Promise<Picture> {
        return await this.pictureRepository.save(picture);
    }

    async update(id: number, picture: Picture): Promise<void> {
        await this.pictureRepository.update(id, picture);
    }

    async delete(id: number): Promise<void> {
        await this.pictureRepository.delete(id);
    }
}
