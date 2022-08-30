<script setup>
import { ref } from "vue";
import HFormBinding from './HFormBinding.vue'

const textContent = ref("");
const moduleContent = ref("");

function onInput(e) {
    textContent.value = e.target.value;
    // console.log(e.target)
    console.log(e.target.id)
    console.log(e.target.placeholder)
}
</script>

<template>
    <p>{{ textContent }}</p>
    <p>{{ moduleContent }}</p>
    <input id="textContent" :value="textContent" @input="onInput" placeholder="Type here" />
    <input v-model="moduleContent" placeholder="Type here moduleContent" />
    
    <HFormBinding/>

</template>