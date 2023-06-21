import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Reserve } from './reserve.entity';
import { NewReserve } from './dto/newReserve.dto';

@Injectable()
export class ReserveService {
    constructor(
        @Inject('RESERVE_REPOSITORY')
        private reserveRepository: Repository<Reserve>,
    ) { }

    getReservedByVoo(vooId: any) {
        return this.reserveRepository.query(`SELECT * FROM reserve WHERE voo = ${vooId};`)
    }

    newReserve(data: NewReserve) {
        const reserve = new Reserve()
        reserve.voo = data.voo
        reserve.user = data.user
        reserve.i = data.i
        reserve.j = data.j
        return this.reserveRepository.save(reserve)
    }

}