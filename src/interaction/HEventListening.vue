<script>
import { ref, defineComponent } from "vue";
// 方式一
// export default {
//   data() {
//     return { count: 0 };
//   },
//   methods: {
//     add() {
//         this.count++
//     },
//     reduce() {
//         this.count--
//     }
//   },
// };

// 方式2
export default defineComponent({
    setup() {
        const count = ref(0)
        function add() {
            count.value++
        }
        // 可以接收参数 e
        function reduce(e) {
            count.value--
        }

        return {
            count,
            add,
            reduce
        }
    }
})
</script>
<template>
  <!-- 使此按钮生效 
    注意不是 add(), 而是add
    -->
  <button v-on:click="add">选项式：add</button>
  <button @click="reduce">选项式：reduce</button>
  <span>{{ count }}</span>
</template>