<script lang="ts">
import {Todo} from "@/entities/todo";
import TodoForm from "@/components/ToDo/TodoForm.vue";
import TheTodo from "@/components/ToDo/TheTodo.vue";

// SMART COMPONENT EXAMPLE
export default {
    name: "TheTodoItems",
    components: {TheTodo, TodoForm},
    data() {
        return {
            items: [],
            loading: false,
            todo: new Todo({status: "new"})
        }
    },
    mounted() {
        this.getDate();
    },
    methods: {
        async getDate() {
            try {
                this.loading = true;
                this.items = await this.$services.todos.getAll();
            } catch (e) {
                console.log(e);
            } finally {
                this.loading = false;
            }
        },
        remove(id) {
            // ADD USING TOTOSERVICE
            alert("remove Id = " + id);
            // this.$services.todos.remove();

        },
        add(model) {
            // ADD USING TOTOSERVICE
            this.todo = new Todo({status: "new"});
            model.id = this.items.length + 1;
            this.items.push(model);
        },
        edit(model) {
            this.todo = model;
        },
        save(model) {
            // ADD USING TOTOSERVICE
            this.items.push(model);
        },
        done(model) {
           model.status = "done";
        }
    }
}
</script>

<template>
    <div class="todo">
        <h1 class="todo--title">Todo</h1>
        <TodoForm :todo="todo" @add="add" @save="save"/>
        <div class="todo--items">
            <TheTodo v-for="item in items"
                     :item="item"
                     @edit="edit"
                     @remove="remove"
                     @done="done"/>
        </div>
    </div>
</template>

