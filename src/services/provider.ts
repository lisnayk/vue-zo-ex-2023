import {TodoService} from "@/services/todo";

export const provider=():IProvider=>{
    return {
        todos: new TodoService(),
        // todos: new TodoServiceFirebase()
    }
}
