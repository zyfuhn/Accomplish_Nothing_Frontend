<!-- vue2 方式 -->
<script>
    export default{
        data(){
            return {
                count: 0
            }
        },
        methods:{
            sendEmit() {
                this.count++
                this.$emit('toParent', "传递给父组件消息次数"+ this.count)
            }
        },
        emits: ['toParent']
    }
</script>


<!-- vue3 方式 -->
<!-- <script setup>
    import {ref} from 'vue'
    const myEmit = defineEmits(['toParent'])
    
    const count = ref(1)

    function sendEmit(){
        count.value++
        myEmit('toParent', 'hello from emit child' + count.value)
    }
</script> -->

<template>
    <p @click="sendEmit">点击子组件事件{{count}}</p>
</template>