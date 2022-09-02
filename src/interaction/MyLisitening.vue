<script setup>
import { ref, watch } from "vue";
import HMyLisitening from './HMyLisitening.vue'
const count = ref(1);
watch(count, (newCount) => {
  console.log(`new count is : ${newCount}`);
  fetchData()
});
function changeCount() {
  count.value++;
}

const todoData = ref(null);

async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${count.value}`
  );
  todoData.value = await res.json()
}
fetchData()
</script>

<template>
  <button v-on:click="changeCount">修改count</button>
  <p v-if="!todoData">Loading ...</p>
  <pre v-else>{{ todoData }} </pre>

  <HMyLisitening/>
</template>