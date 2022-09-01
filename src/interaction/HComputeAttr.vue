<script>
import { ref, computed, defineComponent } from "vue";
// 方式1 vue2 写法
let id =0
export default {
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((todo) => !todo.done)
        : this.todos;
    },
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false });
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
  data() {
    return {
      newTodo: "",
      hideCompleted: false,
      todos: [
        { id: id++, text: "Learn HTML", done: true },
        { id: id++, text: "Learn JavaScript", done: true },
        { id: id++, text: "Learn Vue", done: false },
      ],
    };
  },
};

// 方式2 vue3 写法
// export default defineComponent({
//   setup() {
//     let id = 0;
//     const newTodo = ref("");
//     const hideCompleted = ref(false);
//     const todos = ref([
//       { id: id++, text: "Learn HTML", done: true },
//       { id: id++, text: "Learn JavaScript", done: true },
//       { id: id++, text: "Learn Vue", done: false },
//     ]);

//     function addTodo() {
//       todos.value.push({ id: id++, text: newTodo.value, done: false });
//       newTodo.value = "";
//     }

//     function removeTodo(todo) {
//       todos.value = todos.value.filter((t) => t !== todo);
//     }

//     const filteredTodos = computed(() => {
//       return hideCompleted.value
//         ? todos.value.filter((todo) => !todo.done)
//         : todos.value;
//     });

//     return {
//       newTodo, hideCompleted, addTodo, removeTodo, filteredTodos
//     }
//   },
// });
</script>
    
<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? "Show all" : "Hide completed" }}
  </button>
</template>
    

<style>
.done {
  text-decoration: line-through;
}
</style>