<template>
    <form class="todo-form">
        <input v-model="model.title" type="text" class="todo-form--input" placeholder="Title">
        <input v-model="model.description" type="text" class="todo-form--input" placeholder="Description">
        <button v-if="model.id" @click.prevent="add" class="todo-form--button">Add</button>
        <button v-else @click.prevent="add" class="todo-form--button">Save</button>
    </form>
</template>
<script lang="ts">
import {Todo} from "@/entities/todo";

// DUMMY COMPONENT EXAMPLE
export default {
    name: 'TodoForm',
    props: { // WE MUST NOT CAHNGE PROPS!!!
        todo: {
            type: Todo,
            default: () => (new Todo({status: 'new'}) as Todo)
        },
    },
    data() {
        return {
            model: new Todo({
                status: 'new'
            })
        }
    },
    watch: {
      todo: {
          handler(value){
              this.model = new Todo({...value});
          },
          immediate: true
      }
    },
    methods: {
        add() {
            this.$emit("add", this.model);
        },
        save() {
            this.$emit("save", this.model);
        }
    }
}
</script>
<style scoped lang="scss">

.todo-form {
  display: flex;
  gap: 1em;
  justify-content: space-around;
  padding: 1em;
  background: #ccc;
  margin: 0.5em;
  border-radius: 0.5em;

  &--input {
    width: 100%;
    padding: 0.5em;
    border-radius: 0.5em;
    border: 1px solid #ccc;
  }

  &--button {
    padding: 0.5em;
    border-radius: 0.5em;
    border: 1px solid #ccc;
    cursor: pointer;
  }
}

</style>
