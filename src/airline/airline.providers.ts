import { DataSource } from 'typeorm';
import { Airline } from './airline.entity';

export const airlineProviders = [
  {
    provide: 'AIRLINE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Airline),
    inject: ['DATA_SOURCE'],
  },
];