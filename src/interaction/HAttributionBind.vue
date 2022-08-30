<script>
import { ref, defineComponent } from "vue";
// 选项式一： 使用 defineComponent 返回组件数据
// export default defineComponent({
//   name: "HAttributionBind",
//   setup() {
//     const frontSize = ref({
//       id: "full",
//       class: "biggerFront",
//     });
//     const myTitle = ref("myTitle");
//     console.log(frontSize.value.class);
//     return {
//       frontSize,
//       myTitle,
//     };
//   },
// });

// 选项式二： 使用export default 定义组件数据， vue2语法
export default {
  data() {
    return {
      frontSize: {
        id: "full",
        className: "biggerFront",
      },
      myTitle: "myTitle",
    };
  },
};
</script>

<template>
  <div v-bind="frontSize" v-bind:title="frontSize.class">
    绑定标题id和class属性, title:{{ frontSize.class }}
  </div>
  <div v-bind:title="myTitle">绑定标题title属性, title:{{ myTitle }}</div>
  <!-- <div :class="frontSize">绑定标题class属性</div> -->
</template>

<style>
.biggerFront {
  font-size: 20px;
}
</style>