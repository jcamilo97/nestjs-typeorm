import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

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

    
}