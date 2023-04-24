import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {Users} from "./users";
import {Video} from "./video";
import {Comments} from "./comments";
import {Picture} from "./picture";
import {Category} from "./category";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 400, nullable: false})
    text: string;

    @ManyToOne(() => Users, users => users.posts, {nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE"})
    user: number;

    @ManyToOne(() => Category, category => category.posts, {nullable: false, onDelete: "CASCADE", onUpdate: "CASCADE"})
    category: number;

    @OneToMany(() => Video, video => video.post)
    video: Video[];

    @OneToMany(() => Comments, comments => comments.post)
    comments: Comments[];

    @OneToMany(() => Picture, picture => picture.post)
    picture: Picture[];
}
