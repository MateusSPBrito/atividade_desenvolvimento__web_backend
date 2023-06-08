import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Airline } from './airline.entity';

@Injectable()
export class AirlineService {
    constructor(
        @Inject('AIRLINE_REPOSITORY')
        private airlineRepository: Repository<Airline>,
    ) { }

    async findAll(): Promise<Airline[]> {
        return this.airlineRepository.find();
    }
}