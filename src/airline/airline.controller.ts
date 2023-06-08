import { Controller, Get } from '@nestjs/common';
import { AirlineService } from './airline.service';
import { Airline } from './airline.entity';

@Controller('airline')
export class AirlineController {
  constructor(private readonly airlineService: AirlineService) {}

  @Get()
  getHello(): Promise<Airline[]> {
    return this.airlineService.findAll();
  }
}
  