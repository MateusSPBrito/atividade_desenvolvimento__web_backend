import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Voo } from './voo.entity';

@Injectable()
export class VooService {
    constructor(
        @Inject('VOO_REPOSITORY')
        private vooRepository: Repository<Voo>,
    ) { }

    async findVoos(date: any, start: any, destiny: any): Promise<Voo[]> {
        if (!date) return []
        return this.vooRepository.query(`
        SELECT v.id AS id, v.start AS start,  v.startAirport AS startAirport, 
        v.destiny AS destiny, v.destinyAirport AS destinyAirport, v.date AS date, 
        v.time AS time, p.model AS plane, a.name AS airline, pl.name AS pilot, v.price AS price

        FROM voo AS v, plane AS p, airline AS a, pilot AS pl
        
        WHERE v.date = '${date}' AND v.start = '${start}' AND 
        v.destiny = '${destiny}' AND v.plane = p.id AND v.airline = a.id AND v.pilot = pl.id;
        `)
    }
}