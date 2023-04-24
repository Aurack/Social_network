import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import {Users} from "./users";
import {Posts} from "./posts";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 400, nullable: false})
    text: string;

    @ManyToOne(() => Users, users => users.comments, {nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE"})
    user: number;

    @ManyToOne(() => Posts, posts => posts.comments, {nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE"})
    post: number;
}
