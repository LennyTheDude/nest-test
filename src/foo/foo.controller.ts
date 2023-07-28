import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { FooService } from './foo.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Foo')
@Controller({
  path: 'foo/calc',
  version: '1',
})
export class FooController {
  constructor(private service: FooService) {}
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('add')
  add(@Req() req: Request) {
    return this.service.add({ ...req.query });
  }

  @Get('subtract')
  subtract(@Req() req: Request) {
    return this.service.subtract({ ...req.query });
  }

  @Get('multiply')
  multiply(@Req() req: Request) {
    return this.service.multiply({ ...req.query });
  }

  @Get('divide')
  divide(@Req() req: Request) {
    return this.service.divide({ ...req.query });
  }
}
