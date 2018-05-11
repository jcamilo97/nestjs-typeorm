import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne } from 'typeorm';
import { Company } from '../company/company.enity' 

@Entity()
export class Dependence {
    
    @PrimaryColumn("varchar",{length:200})
    dep_name: string;

    @Column()
    dep_type: boolean;

    @Column()
    dep_state: boolean;
    
    @PrimaryColumn("int4")
    companycom_id:number;

    @Column()
    dependencedep_name: string;

    @Column("int4")
    dependencecompanycom_id: number;

    
    @ManyToOne(type => Company, company => company.dependences)
    company: Company;
    
}