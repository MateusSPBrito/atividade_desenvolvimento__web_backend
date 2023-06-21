import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reserve {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    voo: number;

    @Column()
    i: number;

    @Column()
    j: number;

    @Column()
    user: number;
}