import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { pilotProviders } from './pilot.providers';
import { PilotService } from './pilot.service';
import { PilotController } from './pilot.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PilotController],
  providers: [
    ...pilotProviders,
    PilotService,
  ],
})
export class PilotModule {}