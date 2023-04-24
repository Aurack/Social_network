import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Posts} from "./posts";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50, nullable: false})
    name: string;

    @OneToMany(() => Posts, posts => posts.category)
    posts: Posts[];
}
