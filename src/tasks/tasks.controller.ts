import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {Task} from "./tasks.model";
import {CreateTaskDto} from "./dto/CreateTask.dto";

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
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
}
