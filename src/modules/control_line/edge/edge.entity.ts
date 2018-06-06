import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne } from 'typeorm';
import { Company } from '../company/company.enity' 

@Entity()
export class Edge {
   
    @PrimaryColumn()
    id:string;

    @Column()
    source: string;

    @Column()
    target:string;

    @Column("json")
    controlPoints:any[]


    
}