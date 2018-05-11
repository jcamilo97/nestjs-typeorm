import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import { Dependence } from '../entities/dependence.entity'
@Entity()
export class Company {
    
    @PrimaryColumn('int4')
    com_id: number;

    @Column()
    com_nit:number;

    @Column({length:200})
    com_name: string;

    @Column()
    com_address: number;

    @Column()
    com_telephone: number;

    @Column()
    com_city: string;

    @Column()
    com_state: boolean;
    
    @Column()
    com_type: string;
    
    @Column()
    com_created_at:string;

    @Column('int4')
    companycom_id:number;

    @Column('numeric(12,7)')
    com_lat:number;

    @Column('numeric(12,7)')
    com_lng:number;

    @OneToMany(type => Dependence, Dependence => Dependence.companycom_id)
    dependence: Dependence[];
}