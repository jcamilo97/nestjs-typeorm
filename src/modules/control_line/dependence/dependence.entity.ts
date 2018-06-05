import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne } from 'typeorm';
import { Company } from '../company/company.enity' 

@Entity()
export class Dependence {
   
    @Column()
    id:string;

    @PrimaryColumn("varchar",{length:200})
    name: string;

    @Column()
    type: boolean;

    @Column()
    state: boolean;

    @Column()
    x: number;

    @Column()
    y: number;
    
    @PrimaryColumn("varchar",{length:200})
    company_id:string;

    @Column()
    dependence_name: string;

    @Column("varchar",{length:200})
    dependence_company_id: string;

    
    @ManyToOne(type => Company, company => company.dependences)
    company: Company;
    
}