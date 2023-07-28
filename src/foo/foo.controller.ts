import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FooService } from './foo.service';
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
  add(@Query('num1') num1?: number, @Query('num2') num2?: number) {
    return this.service.add({ num1, num2 });
  }

  @Get('subtract')
  subtract(@Query('num1') num1?: number, @Query('num2') num2?: number) {
    return this.service.subtract({ num1, num2 });
  }

  @Get('multiply')
  multiply(@Query('num1') num1?: number, @Query('num2') num2?: number) {
    return this.service.multiply({ num1, num2 });
  }

  @Get('divide')
  divide(@Query('num1') num1?: number, @Query('num2') num2?: number) {
    return this.service.divide({ num1, num2 });
  }
}
