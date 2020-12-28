import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm";
import { Flavour } from "./flavour.entity";

@Entity() //sql table === 'coffee'
export class Coffee{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    brand:string;

    @JoinTable()
    @ManyToMany(
        type => Flavour,
        (flavour) => flavour.coffees,
    )
    flavors:string[];
}