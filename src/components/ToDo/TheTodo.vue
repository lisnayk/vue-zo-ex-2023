<template>
    <div class="todo-element">
        <div class="todo-element--id">{{ item.id }}</div>
        <div class="todo-element--title" :class="{'done': item.status === 'done' }">{{ item.title }}</div>
        <div class="todo-element--description">{{ item.desctiption }}</div>
        <div class="todo-element--status">{{ item.status }}</div>
        <a @click.prevent="$emit('remove', item)" class="todo-element__action todo-element__action--remove">Remove</a>
        <a @click.prevent="$emit('edit', item)" class="todo-element__action todo-element__action--edit">Edit</a>
        <a @click.prevent="$emit('done', item)" class="todo-element__action todo-element__action--done">Done</a>
    </div>
</template>
<script lang="ts">
import {Todo} from "@/entities/todo";

// DUMMY COMPONENT EXAMPLE
export default {
    name: 'TheTodo',
    props: {
        item: {
            type: Todo,
            default: () => (new Todo({
                status: 'new'
            }) as Todo)
        },
    }
}
</script>
<style scoped lang="scss">
.todo-element {
  display: flex;
  gap: 1em;
  justify-content: space-around;
  background: #EEE;
  padding: 1em;
  border-radius: 0.5em;
  margin: 0.5em;
  &--title {
    &.done {
      text-decoration: line-through;
    }
  }
  &__action {
    display: flex;
    gap: 1em;
    cursor: pointer;
    justify-content: space-around;

    &--remove {
      color: red;
    }

    &--done {
      color: green;
    }
  }
}

</style>
