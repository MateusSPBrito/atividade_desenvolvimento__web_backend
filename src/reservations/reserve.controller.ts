import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ReserveService } from './reserve.service';
import { Reserve } from './reserve.entity';
import { NewReserve } from './dto/newReserve.dto';

@Controller('reservation')
@UseGuards(AuthGuard('jwt'))
export class ReserveController {
    constructor(private readonly reserveService: ReserveService) { }

    @Get('/:vooId')
    getReservedByVoo(@Param('vooId') vooId: any): Promise<any[]> {
        return this.reserveService.getReservedByVoo(vooId)
    }

    @Post('new')
    async creat(@Body() data: NewReserve): Promise<any> {
        return this.reserveService.newReserve(data)
    }

    @Get('/my-reservations/:id')
    getReservedByUser(@Param('id') id: any): Promise<any[]> {
        return this.reserveService.getReservedByUser(id)
    }
}
