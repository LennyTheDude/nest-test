import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from 'src/config/config.type';

@Injectable()
export class FooService {
  constructor(private configService: ConfigService<AllConfigType>) {}

  foo() {
    return { message: 'foo' };
  }
}
