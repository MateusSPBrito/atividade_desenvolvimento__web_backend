import { DataSource } from 'typeorm';
import { Voo } from './voo.entity';

export const vooProviders = [
  {
    provide: 'VOO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Voo),
    inject: ['DATA_SOURCE'],
  },
];