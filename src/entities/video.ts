import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne} from 'typeorm';
import {Posts} from "./posts";

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 400})
    url: string;

    @ManyToOne(() => Posts, posts => posts.video, {nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE"})
    post: number;
}
