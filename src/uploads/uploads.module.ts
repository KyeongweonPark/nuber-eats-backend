import { DynamicModule, Global, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { UploadsController } from './uploads.controller';
import { UploadsModuleOptions } from './uploads.interface';

@Module({
  controllers: [UploadsController],
})
@Global()
export class UploadsModule {
  static forRoot(options: UploadsModuleOptions): DynamicModule {
    return {
      module: UploadsModule,
      providers: [{ provide: CONFIG_OPTIONS, useValue: options }],
      exports: [],
    };
  }
}
