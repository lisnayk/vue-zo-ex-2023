import type {ITodoService} from "@/services/todo";

export interface IProvider {
    todos: ITodoService;
}
