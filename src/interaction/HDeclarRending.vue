<script>
    import {ref, defineComponent, reactive } from 'vue'
    export default defineComponent({
        name: "HDeclarRending",
        setup(){
            const msg = ref("i am a accomplish nothing guy.")
            const counter = reactive({
                count: 5
            })

            return {
                msg,
                counter
            }
        }
    })
</script>

<template>
    <!-- 访问msg 的时候不需要.value, 会自动解包 -->
    <h1>{{msg.split('').reverse().join('')}}</h1>
    <h2>count is : {{counter.count+20}}</h2>
</template>