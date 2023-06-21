import { Controller, Get, Param, Query } from '@nestjs/common';
import { VooService } from './voo.service';
import { Voo } from './voo.entity';

@Controller('voo')
export class VooController {
  constructor(private readonly vooService: VooService) { }

  @Get()
  async getVoos(@Query() params: any): Promise<Voo[]> {
    const go = await this.vooService.findVoos(params.date, params.start, params.destiny)
    const back = await this.vooService.findVoos(params.datereturn, params.destiny, params.start)
    return [...go,...back];
  }

  // @Get('/:id')
  // getByUserId(@Param('id') id: any): Promise<Voo[]> {
    
  //   return this.vooService.getByUserId(id);
  // }

}
