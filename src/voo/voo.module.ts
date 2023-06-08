import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { vooProviders } from './voo.providers';
import { VooService } from './voo.service';
import { VooController } from './voo.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [VooController],
  providers: [
    ...vooProviders,
    VooService,
  ],
})
export class VooModule {}