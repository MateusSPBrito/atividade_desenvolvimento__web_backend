import { DataSource } from 'typeorm';
import { Pilot } from './pilot.entity';

export const pilotProviders = [
  {
    provide: 'PILOT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pilot),
    inject: ['DATA_SOURCE'],
  },
];