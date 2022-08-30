<script>
    // import {ref, defineComponent} from 'vue'
    // // 方式1 --- vue3
    // export default defineComponent({
    //     name: 'HConditionRending',
    //     setup() {
    //         const flag = ref(0)
    //         function toggle(){
    //             flag.value ++
    //         }
    //         return {
    //             flag,
    //             toggle
    //         }
    //     }
    // })
    // 方式2  --vue2
    export default {
        methods:{
            toggle(){
                this.flag++
            }
        },
        data() {
            return {
                flag: 0
            }
        }
    }
</script>
<template>
    <h2 @click="toggle">组合式, 点击切换选项</h2>
    <p v-if="flag%3==0">work for another team at ads department</p>
    <p v-else-if="flag%3==1">word for current department as another role</p>
    <p v-else>work for another team</p>
</template>