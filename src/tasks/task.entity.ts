import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TaskStatus} from "./enums/TaskStatus.enum";

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
}