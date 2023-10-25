<script setup lang="ts">
import {ref} from "vue";
const counter= ref(0);
const props = defineProps({
    title: {
        type: String,
        default: "Counter"
    }
})
const emit = defineEmits(["voited"]);
const handleIncrement = () => {
    counter.value++;
    emit("voited");
}
const handleDecrement = () => {
    counter.value--;
    emit("voited");
}
</script>

<template>
    <div class="counter">
        <h1 class="counter__title">{{ props.title }}</h1>
        <p class="counter__value">{{counter}}</p>
        <button class="counter__button" @click="handleIncrement">Increment</button>
        <button class="counter__button" @click="handleDecrement">Decrement</button>
    </div>
</template>

<style scoped>
.counter {
    background: #ccc;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
}
.counter__title{
    font-size: 16px;
    font-weight: bold;

}
.counter__button{
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
}
</style>
