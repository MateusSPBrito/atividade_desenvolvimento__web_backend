import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Plane } from './plane.entity';

@Injectable()
export class PlaneService {
    constructor(
        @Inject('PLANE_REPOSITORY')
        private planeRepository: Repository<Plane>,
    ) { }

    async findAll(): Promise<Plane[]> {
        return this.planeRepository.find();
    }
}