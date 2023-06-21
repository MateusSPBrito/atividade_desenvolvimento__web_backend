import { DataSource } from 'typeorm';
import { Reserve } from './reserve.entity';

export const reserveProviders = [
  {
    provide: 'RESERVE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Reserve),
    inject: ['DATA_SOURCE'],
  },
];