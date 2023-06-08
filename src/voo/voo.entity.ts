import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Voo {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('int')
  plane: number;

  @Column('int')
  pilot: number;

  @Column({length: 100})
  start: string;

  @Column({ length: 100 })
  startAirport: string;

  @Column({length: 100})
  destiny: string;

  @Column({ length: 100 })
  destinyAirport: string;

  @Column({ length: 100 })
  date: string;

  @Column({ length: 100 })
  time: string;

  @Column('int')
  airline: number;

  @Column('int')
  price: number;
}