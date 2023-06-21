import { Controller, Get } from '@nestjs/common';
import { AirlineService } from './airline.service';
import { Airline } from './airline.entity';

@Controller('airline')
export class AirlineController {
  constructor(private readonly airlineService: AirlineService) {}

  @Get()
  findAll(): Promise<Airline[]> {
    return this.airlineService.findAll();
  }
}
  