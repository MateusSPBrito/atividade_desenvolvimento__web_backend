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

    getReservedByUser(id: any) {
        return this.reserveRepository.query(`
        SELECT v.id AS id, v.start AS start,  v.startAirport AS startAirport, 
        v.destiny AS destiny, v.destinyAirport AS destinyAirport, v.date AS date, 
        v.time AS time, p.model AS plane, a.name AS airline, pl.name AS pilot, v.price AS price, 
        r.i As i, r.j As j

        FROM reserve As r, voo AS v, plane AS p, airline AS a, pilot AS pl
        
        WHERE v.plane = p.id AND v.airline = a.id AND v.pilot = pl.id AND r.voo = v.id And r.user = ${id};
        `)
    }
}