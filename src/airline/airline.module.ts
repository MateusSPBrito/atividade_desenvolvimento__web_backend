import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { airlineProviders } from './airline.providers';
import { AirlineService } from './airline.service';
import { AirlineController } from './airline.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AirlineController],
  providers: [
    ...airlineProviders,
    AirlineService,
  ],
})
export class AirlineModule {}