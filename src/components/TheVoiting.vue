<script setup lang="ts">
import Counter from "@/components/TheCounter.vue";
import {ref} from "vue";
const counters = ref(["Question 1","Question 2", "Question 3", "Question 4"]);
const voites = ref(0);
const handleVoited = () => {
    voites.value++;
}
</script>

<template>

    <div class="counters">
        <div class="counters__voided">{{voites}}</div>
        <div class="counters__items">
            <counter v-for="title in counters" :title = "title" @voited="handleVoited"/>
        </div>

    </div>
</template>

<style scoped>
.counters__items {
    padding: 10px;
    background: #eee;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
}
</style>
