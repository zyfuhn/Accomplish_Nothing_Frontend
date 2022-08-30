<script>
import { ref, defineComponent } from "vue";
// 方式1 ---vue3
// export default defineComponent({
//     name: 'HFormBinding',
//     setup() {
//         const moduleContent = ref("")
//         return{
//             moduleContent
//         }
//     }
// })
// 方式2 --- vue2
export default {
    data() {
        return {
            moduleContent: ''
        }
    }
}

</script>

<template>
    <p>{{ moduleContent }}</p>
    <input v-model="moduleContent" placeholder="Type here moduleContent" />
</template>