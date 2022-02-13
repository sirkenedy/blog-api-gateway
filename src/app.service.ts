import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('POST_SERVICE') private readonly postClient: ClientProxy
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async create(data) {
    return await this.postClient.send({ cmd: 'createPost' }, data);
  }
}
