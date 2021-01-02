import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {Task, TaskStatus} from "./tasks.model";
import {CreateTaskDto} from "./dto/CreateTask.dto";
import {GetTasksFilterDto} from "./dto/GetTasksFilter.dto";
import {TaskStatusValidationPipe} from "./pipes/TaskStatusValidation.pipe";

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
        if(Object.keys(filterDto).length)
            return this.tasksService.getTasksWithFilters(filterDto)
        return this.tasksService.getAllTasks();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Delete('/:id')
    removeTaskById(@Param('id') id: string): void {
        return this.tasksService.removeTaskById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus
    ): Task {
        return this.tasksService.updateTaskStatus(id, status)
    }
}
