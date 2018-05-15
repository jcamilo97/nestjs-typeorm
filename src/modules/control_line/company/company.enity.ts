import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, OneToMany, JoinColumn } from 'typeorm';
import { Dependence } from '../dependence/dependence.entity'
@Entity()
export class Company {
    
    @PrimaryGeneratedColumn()
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
    
    @CreateDateColumn({nullable:true,type:"date",default:'now'})
    com_created_at:string;

    @Column('int4')
    companycom_id:number;

    @Column({type:"numeric", precision:12, scale:7 })
    com_lat:number;

    @Column({type:"numeric", precision:12, scale:7 })
    com_lng:number;

    @Column({type:"numeric", precision:3})
    com_code_iso3166: number;

    @OneToMany(type => Dependence, dependence => dependence.companycom_id)
    dependences: Dependence[];
}