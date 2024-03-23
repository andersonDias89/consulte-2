import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Medico {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nomeCompleto!: string;

    @Column()
    email!: string;

    @Column()
    cpf!: string;

    @Column()
    especializacao!: string;
}
