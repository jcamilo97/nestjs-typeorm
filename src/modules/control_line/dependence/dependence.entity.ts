import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm';
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
    state: string;

    @Column()
    x: number;

    @Column()
    y: number;
    
    @PrimaryColumn("varchar",{length:200})
    company_id:string;
    
}