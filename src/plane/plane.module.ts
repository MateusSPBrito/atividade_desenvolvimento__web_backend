import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { planeProviders } from './plane.providers';
import { PlaneService } from './plane.service';
import { PlaneController } from './plane.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PlaneController],
  providers: [
    ...planeProviders,
    PlaneService,
  ],
})
export class PlaneModule {}