<!-- vue2 -->
<script>
    export default {
        props: {
            msg:String
        }
    }
</script>


<!-- vue3 -->
<!-- <script setup>
    
    import {ref } from 'vue'
    const props = defineProps({
        msg: String
    })
</script> -->


<template>
    <p>子组件: {{msg}}</p>
    
</template>