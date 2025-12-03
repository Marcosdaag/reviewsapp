import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './resources/users/users.module';
import { PostsModule } from './resources/posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    UsersModule,
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
