<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "HListRending",
  setup() {
      const todoInfo = ref("");
      const todoList = ref([
          { id: 1, content: "洗澡" },
          { id: 2, content: "洗衣" },
          { id: 3, content: "学习" },
          { id: 4, content: "睡觉" },
        ]);
    const count = ref(todoList.value.length);

    function add() {
      if (todoInfo.value == "") {
        return;
      }
    //   count.value++
      todoList.value.push({
        id: ++count.value,
        content: todoInfo.value,
      });
      todoInfo.value = "";
    }
    function sub(id) {
        console.log(todoList.value)
        console.log(id)
        console.log(count.value)
      todoList.value = todoList.value.filter((todo) => id != todo.id);
    }

    return {
      count,
      todoInfo,
      todoList,
      add,
      sub,
    };
  },
});
</script>

<template>
  <p>
    <input v-model="todoInfo" type="text" placeholder="请输入待办事项" />
    <button @click="add">添加</button>
  </p>
  <ul>
    <li v-for="(todo, index) in todoList" :key="todo.id">{{index+1}}.{{todo.content}}<button v-on:click="sub(todo.id)">删除</button></li>
    
  </ul>
</template>
