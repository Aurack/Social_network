import { Injectable } from '@nestjs/common';
import {Users} from "../entities/users";
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) {}

    async findAll(): Promise<Users[]> {
        return await this.userRepository.find();
    }
    async findById(id: number): Promise<Users> {
        return this.userRepository.findOneOrFail({where: {id: +id}});
    }

    async create(user: Users): Promise<Users> {
        return await this.userRepository.save(user).then(async u => {
            if (!u.username) {
                u.username = "newUser" + u.id.toString();
                await this.update(u.id, u).then();
            }
            return u;
        });
    }

    async update(id: number, user: Users): Promise<void> {
        await this.userRepository.update(id, user);
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
