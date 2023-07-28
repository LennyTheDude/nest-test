import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FooService } from './foo.service';

@ApiTags('Foo')
@Controller({
  path: 'foo',
  version: '1',
})
export class FooController {
  constructor(private service: FooService) {}

  @Get()
  foo() {
    return this.service.foo();
  }
}
