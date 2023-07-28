import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from 'src/config/config.type';

@Injectable()
export class FooService {
  constructor(private configService: ConfigService<AllConfigType>) {}

  add(params: any) {
    if (!params.num1 || !params.num2)
      return { error: 'Please provide 2 numbers to add!' };
    return { result: params.num1 + params.num2 };
  }

  subtract(params: any) {
    if (!params.num1 || !params.num2)
      return { error: 'Please provide 2 numbers to subtract!' };
    return { result: params.num1 - params.num2 };
  }

  multiply(params: any) {
    if (!params.num1 || !params.num2)
      return { error: 'Please provide 2 numbers to multiply!' };
    return { result: params.num1 * params.num2 };
  }

  divide(params: any) {
    if (!params.num1 || !params.num2)
      return { error: 'Please provide 2 numbers to divide!' };
    return { result: params.num1 / params.num2 };
  }
}
