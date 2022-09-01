<script setup>
    import {ref, reactive} from 'vue'
    import HListRending from "./HListRending.vue"
    const newDo = ref('')
    const id = ref(0)
    const todoList = reactive({
        arr: [
        {
            todoId: id.value++,
            content: '洗脸'
        },
        {
            todoId: id.value++,
            content: '刷牙'
        },
        {
            todoId: id.value++,
            content: '上厕所'
        },
        {
            todoId: id.value++,
            content: '上班'
        }
    ]
    })
    function delTodo(todo){
        console.log(todo)
        console.log(todoList)
        todoList.arr = todoList.arr.filter((temp) => temp != todo )
    }
</script>

<template>
    <ul>
        <li  v-for="todo in todoList.arr" :key="todo.todoId">{{todo.content}} <button @click="delTodo(todo)">删除</button></li> 
    </ul>
    <HListRending/>
</template>