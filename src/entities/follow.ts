import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne} from 'typeorm';
import {Users} from "./users";

@Entity()
export class Follow {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Users, users => users.follower, {nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE"})
    user: number;

    @ManyToOne(() => Users, users => users.followed, {nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE"})
    followed: number;
}
