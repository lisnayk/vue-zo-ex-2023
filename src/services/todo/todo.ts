import type {ITodoService} from "@/services/todo";
import type {ITodo} from "@/entities/todo";
import {Todo} from "@/entities/todo";

export class TodoServiceFirebase implements ITodoService {
    public async getAll(): Promise<ITodo[]> {
        return new Promise<ITodo[]>((resolve) => {
            resolve([
                new Todo({
                    id: '1',
                    title: 'title firebase' ,
                    description: 'description',
                    status: 'status'
                }),
                new Todo({
                    id: '2',
                    title: 'title2 firebase',
                    description: 'description',
                    status: 'status'
                }),
                new Todo({
                    id: '3',
                    title: 'title3 firebase',
                    description: 'description',
                    status: 'status'
                }),
                new Todo({
                    id: '4',
                    title: 'title4 firebase',
                    description: 'description',
                    status: 'status'
                })
            ]);
        })
    }

    public async get(id: string): Promise<ITodo> {
        return {} as ITodo
    }

    public async create(data: ITodo): Promise<ITodo> {
        return {} as ITodo
    }

    public async update(id: string, data: ITodo): Promise<ITodo> {
        return {} as ITodo
    }

    public async delete(id: string): Promise<void> {
        return
    }
}

/**
 * @name Todo
 */
export class TodoService implements ITodoService {
    /**
     * @name getAll
     * @description Get all todos
     * @returns {Promise<ITodo[]>}
     */
    public async getAll(): Promise<ITodo[]> {
        return new Promise<ITodo[]>((resolve) => {
            resolve([
                new Todo({
                    id: '1',
                    title: 'title',
                    description: 'description',
                    status: 'status'
                }),
                new Todo({
                    id: '2',
                    title: 'title2',
                    description: 'description',
                    status: 'status'
                }),
                new Todo({
                    id: '3',
                    title: 'title3',
                    description: 'description',
                    status: 'status'
                }),
                new Todo({
                    id: '4',
                    title: 'title4',
                    description: 'description',
                    status: 'status'
                })
            ]);
        })
    }

    public async get(id: string): Promise<ITodo> {
        return {} as ITodo
    }

    public async create(data: ITodo): Promise<ITodo> {
        return {} as ITodo
    }

    public async update(id: string, data: ITodo): Promise<ITodo> {
        return {} as ITodo
    }

    public async delete(id: string): Promise<void> {
        return
    }
}
