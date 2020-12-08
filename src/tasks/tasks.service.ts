import {Injectable} from '@nestjs/common';
import {Task, TaskStatus} from "./tasks.model";
import { v4 as uuidv4 } from 'uuid';
import {CreateTaskDto} from "./dto/CreateTask.dto";

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(createTaskDto: CreateTaskDto): Task {

        const { title, description } = createTaskDto;

        const task: Task = {
            id: uuidv4(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);
        return task;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    removeTaskById(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTaskStatus(id: string, status: TaskStatus): Task {

        const task: Task = this.getTaskById(id);
        task.status = status;

        return task;
    }
}
