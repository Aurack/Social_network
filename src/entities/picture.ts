import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Posts} from "./posts";

@Entity()
export class Picture {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 200, nullable: false})
    url: string;

    @ManyToOne(() => Posts, posts => posts.user, {nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE"})
    post: number;
}
