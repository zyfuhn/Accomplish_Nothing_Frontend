<script setup>
    import {ref} from 'vue'
    import HConditionRending from './HConditionRending.vue'
    const flag = ref(0)

    function toggle() {
        flag.value++
    }
</script>

<template>
    <p>condition rending</p>
    <button @click="toggle">切换</button>
    <p v-if="flag%3 == 0">you are accomplish nothing</p>
    <p v-else-if="flag%3==1">i have no progress</p>
    <p v-else >no, i just learning without any plan</p>
    <HConditionRending/>
</template>
