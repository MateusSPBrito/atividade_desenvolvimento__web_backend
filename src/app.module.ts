import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VooModule } from './voo/voo.module';
import { PlaneModule } from './plane/plane.module';
import { AirlineModule } from './airline/airline.module';
import { PilotModule } from './pilot/pilot.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ReserveModule } from './reservations/reserve.module';

@Module({
  imports: [VooModule, PlaneModule, AirlineModule, PilotModule, AuthModule, UserModule, ReserveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }