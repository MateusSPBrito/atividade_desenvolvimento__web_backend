import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ReserveService } from './reserve.service';
import { Reserve } from './reserve.entity';
import { NewReserve } from './dto/newReserve.dto';

@Controller('reservation')
export class ReserveController {
    constructor(private readonly reserveService: ReserveService) { }

    @Get('/:vooId')
    getReservedByVoo(@Param('vooId') vooId: any): Promise<any[]> {
        return this.reserveService.getReservedByVoo(vooId)
    }

    @Post('new')
    async creatUser(@Body() data: NewReserve): Promise<any> {
        return this.reserveService.newReserve(data)
    }

    @Get('/my-reservations/:id')
    getReservedByUser(@Param('id') id: any): Promise<any[]> {
        return this.reserveService.getReservedByUser(id)
    }
}
