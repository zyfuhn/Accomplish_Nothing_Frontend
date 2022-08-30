<script setup>
import { ref, defineComponent } from "vue";
import HAttributionBind from './HAttributionBind.vue';
const redClass = ref("redClass");

</script>

<template>
  <h1 v-bind:class="redClass">绑定标题class属性</h1>
  <h1 :class="redClass">绑定标题class属性</h1>
  <HAttributionBind/>
</template>

<style>
.redClass {
  color: red;
}
</style>