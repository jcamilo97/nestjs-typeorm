import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Dependence {
    
    @PrimaryColumn("int4")
    depid: number;

    @Column("varchar",{length:200})
    depname: string;

    @Column()
    depstate: boolean;
    
    @PrimaryColumn("int4")
    companycomid:number;

    @Column("int4")
    dependencedepid: number;

    @Column("int4")
    dependencecompanycomid: number;

    @Column()
    dep_type: boolean;
    
}