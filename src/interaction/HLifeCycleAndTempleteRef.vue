<script>
import { ref, defineComponent, onMounted } from "vue";
// 方式1 vue2
let count = 0;
export default {
  methods: {
    change() {
        count ++;
        this.$refs.refp.textContent = this.$refs.refp.textContent + count;
        if (count % 2 == 0) {
            this.$refs.refp.className = "red";
        } else {
            this.$refs.refp.removeAttribute("class");
        }
    }
  },
  mounted() {
    count++;
    this.$refs.refp.textContent = "Hello"
  },
  data(){
    return {}
  }
};

// 方式2vue3
// export default defineComponent({
//   name: "HLifeCycleAndTempleteRef",
//   setup() {
//     const count = ref(0);

//     const refp = ref(null);
//     onMounted(() => {
//       console.log(refp.value);
//     });
//     function change() {
//       count.value++;
//       refp.value.textContent = refp.value.textContent + count.value;
//       if (count.value % 2 == 0) {
//         refp.value.className = "red";
//       } else {
//         // document.getElementById("#11").removeAttribute
//         refp.value.removeAttribute("class");
//       }
//     }

//     return {
//         refp,
//         change
//     }
//   }
// });
</script>

<template>
  <p ref="refp">H初始内容</p>
  <button @click="change">修改dom内容</button>
</template>

<style>
.red {
  color: red;
}
</style>