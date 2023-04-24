import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UsersModule } from './modules/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./entities/users";
import {PostsModule} from "./modules/posts.module";
import {Category} from "./entities/category";
import {CategoryModule} from "./modules/category.module";
import {FollowModule} from "./modules/follow.module";
import {VideoService} from "./services/video.service";
import {PictureModule} from "./modules/picture.module";
import {CommentsModule} from "./modules/comments.module";
import {Posts} from "./entities/posts";
import {Follow} from "./entities/follow";
import {Video} from "./entities/video";
import {Picture} from "./entities/picture";
import {Comments} from "./entities/comments";
import {PostsController} from "./controllers/posts.controller";
import {CategoryController} from "./controllers/category.controller";
import {FollowController} from "./controllers/follow.controller";
import {VideoController} from "./controllers/video.controller";
import {PictureController} from "./controllers/picture.controller";
import {CommentsController} from "./controllers/comments.controller";
import {PostsService} from "./services/posts.service";
import {CategoryService} from "./services/category.service";
import {FollowService} from "./services/follow.service";
import {PictureService} from "./services/picture.service";
import {CommentsService} from "./services/comments.service";
import {VideoModule} from "./modules/video.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'social_network',
      entities: [
        Users,
        Posts,
        Category,
        Follow,
        Video,
        Picture,
        Comments
      ],
      synchronize: true,
    }),
    UsersModule,
    PostsModule,
    CategoryModule,
    FollowModule,
    PictureModule,
    VideoModule,
    CommentsModule,
  ],
  controllers: [
    UsersController,
    PostsController,
    CategoryController,
    FollowController,
    PictureController,
    VideoController,
    CommentsController,
  ],
  providers: [
      UsersService,
      PostsService,
      CategoryService,
      FollowService,
      PictureService,
      VideoService,
      CommentsService
  ],
})
export class AppModule {}
