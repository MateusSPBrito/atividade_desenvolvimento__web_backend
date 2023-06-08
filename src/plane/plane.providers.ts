import { DataSource } from 'typeorm';
import { Plane } from './plane.entity';

export const planeProviders = [
  {
    provide: 'PLANE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Plane),
    inject: ['DATA_SOURCE'],
  },
];