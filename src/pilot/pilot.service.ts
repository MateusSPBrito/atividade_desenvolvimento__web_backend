import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pilot } from './pilot.entity';

@Injectable()
export class PilotService {
    constructor(
        @Inject('PILOT_REPOSITORY')
        private pilotRepository: Repository<Pilot>,
    ) { }
}