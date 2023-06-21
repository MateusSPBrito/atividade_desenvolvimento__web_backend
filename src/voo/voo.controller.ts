import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { VooService } from './voo.service';
import { Voo } from './voo.entity';

@Controller('voo')
@UseGuards(AuthGuard('jwt'))
export class VooController {
  constructor(private readonly vooService: VooService) { }

  @Get()
  async getVoos(@Query() params: any): Promise<Voo[]> {
    const go = await this.vooService.findVoos(params.date, params.start, params.destiny)
    const back = await this.vooService.findVoos(params.datereturn, params.destiny, params.start)
    return [...go,...back];
  }
}
