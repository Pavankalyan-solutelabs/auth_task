import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class userEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @Column()
    password:string;
}