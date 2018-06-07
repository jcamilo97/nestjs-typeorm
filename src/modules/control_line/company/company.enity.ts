import { Entity, Column, PrimaryColumn, Index, CreateDateColumn } from 'typeorm';
import { Dependence } from '../dependence/dependence.entity'

@Entity()
export class Company {
    
    @PrimaryColumn()
    com_id: string;

    @Index({ unique: true })
    @Column()
    nit:number;

    @Index({ unique: true })
    @Column({length:200})
    name: string;

    @Column()
    adress: number;

    @Column()
    phone: number;

    @Column()
    city: string;

    @Column()
    state: boolean;
    
    @Column()
    type: string;
    
    @CreateDateColumn({nullable:true,type:"date",default:"('now'::text)::date"})
    com_created_at:string;

    @Column()
    companycom_id:string;

    @Column({type:"numeric", precision:12, scale:7 })
    com_lat:number;

    @Column({type:"numeric", precision:12, scale:7 })
    com_lng:number;

    @Column({type:"numeric", precision:3})
    com_code_iso3166: number;

    @Column({type:"real"})
    x: number;

    @Column({type:"real"})
    y: number;
}