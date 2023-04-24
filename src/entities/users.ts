import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany} from 'typeorm';
import {Posts} from "./posts";
import {Comments} from "./comments";
import {Follow} from "./follow";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50, nullable: true})
    username: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({length: 400, nullable: true})
    bio?: string;

    @OneToMany(() => Posts, posts => posts.user)
    posts: Posts[];

    @OneToMany(() => Comments, comments => comments.user)
    comments: Comments[];

    @OneToMany(() => Follow, follow => follow.user)
    follower: Users[];

    @OneToMany(() => Follow, follow => follow.followed)
    followed: Users[];
}
