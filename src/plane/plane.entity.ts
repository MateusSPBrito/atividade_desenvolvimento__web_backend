import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plane {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    serial: number;

    @Column({ length: 100 })
    model: string;
}