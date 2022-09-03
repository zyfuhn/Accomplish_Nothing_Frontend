<script setup>
    import {ref } from 'vue'
    import PropsChild from './PropsChild.vue'
    import EmitChild from './EmitChild.vue'
    import SlotChild from './SlotChild.vue'
    const greeting = ref("hello child")

    const emitMsg = ref('no emit msg')

    const slotMst = ref("来自父组件的slot信息")
</script>

<template>
    <h2>props</h2>
    <PropsChild v-bind:msg="greeting"/>
    <h2>emit</h2>
    <EmitChild v-on:toParent="(msg) => emitMsg = msg"></EmitChild>
    <p>父组件接收事件消息：{{emitMsg}}</p>

    <h2>slot</h2>
    <SlotChild>{{slotMst}}</SlotChild>
</template>