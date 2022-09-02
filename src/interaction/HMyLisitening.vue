<script>
import { ref, watch, defineComponent, onMounted } from "vue";
// 方式2 vue2
export default{
  methods:{
    async fetchData() {
      this.todoData = null;
      const rsp = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.count}`
      )
      this.todoData = await rsp.json()
    }
  },
  data(){
    return {
      count: 1,
      todoData: null
    }
  },
  mounted(){
    this.fetchData()
  },
  watch: {
    count() {
      this.fetchData()
    }
  }
}


// 方式2 vue3
// export default defineComponent({
//   name: 'HMyLisitening',
//   setup() {
//     const count = ref(1)
//     const todoData = ref(null)
//     function change() {
//       count.value++
//     }
//     watch(count, ()=>{
//       fetchData()
//     })

//     async function fetchData() {
//       todoData.value = null
//       const rsp = await fetch(`https://jsonplaceholder.typicode.com/todos/${count.value}`)
//       todoData.value = await rsp.json()
//     }

//     onMounted(()=>{
//       fetchData()
//     })
    
//     return{
//       todoData,
//       change,
//       count
//     }
//   }
// })
</script>

<template>
  <button @click="count++">修改id:{{count}}</button>
  <p v-if="!todoData">Loading ...</p>
  <p v-else>{{todoData}}</p>
</template>