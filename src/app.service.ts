import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  /**
   *
   */
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    const value = this.configService.get<string>('YOUR_ENV_VARIABLE');
    return 'Get value from env => ' + value;
  }
}
