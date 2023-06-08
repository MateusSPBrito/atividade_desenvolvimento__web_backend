import { Controller, Get } from '@nestjs/common';
import { PlaneService } from './plane.service';
import { Plane } from './plane.entity';

@Controller('plane')
export class PlaneController {
  constructor(private readonly planeService: PlaneService) {}

  @Get()
  getHello(): Promise<Plane[]> {
    return this.planeService.findAll();
  }
}
