<script setup>
    import {ref, defineComponent, reactive } from 'vue'
    import HDeclarRending from './HDeclarRending.vue'

    // reactive 响应式的， 只适用于对象
    const counter = reactive({
        count: 0
    })
    console.log(counter.count)
    counter.count ++

    // ref 可以接受任何类型，基础类型或者对象都适用， ref返回一个包裹对象，默认有.value属性
    const msg = ref("hello accomplish nothing guy.")
    console.log(msg.value)
    msg.value = "changed accomplish guy."

</script>

<template>
    <!-- 访问msg 的时候不需要.value, 会自动解包 -->
    <h1>{{msg}}</h1>
    <h2>count is : {{counter.count}}</h2>
    <HDeclarRending/>
</template>