import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreatePostEvent } from './create-post-event';
import { CreatePostDto } from './create-post-request.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('POST_SERVICE') private readonly postClient: ClientProxy
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('post/create')
  createPost(@Body() createPostDto: CreatePostDto) {
    console.log("gateway", createPostDto)
    return this.appService.create(createPostDto)
  }
}
