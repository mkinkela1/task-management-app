import {TaskStatus} from "../tasks.model";
import {IsIn, IsNotEmpty, IsOptional} from "class-validator";

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    searchTerm: string;
}