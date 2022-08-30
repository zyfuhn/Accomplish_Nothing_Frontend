<script setup>
import {ref, defineComponent} from 'vue'
import HEventListening from './HEventListening.vue'
const count = ref(0)

function add() {
    count.value++;
}

function reduce(){
    count.value--;
}
</script>

<template>
    <!-- 使此按钮生效 
    注意不是 add(), 而是add
    -->
    <button v-on:click="add">add</button>
    <button @click="reduce">reduce</button>
    <span>{{ count }}</span>
    <br>
    <HEventListening/>
</template>