import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { reserveProviders } from './reserve.providers';
import { ReserveService } from './reserve.service';
import { ReserveController } from './reserve.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [ReserveController],
    providers: [
        ...reserveProviders,
        ReserveService,
    ],
})
export class ReserveModule { }