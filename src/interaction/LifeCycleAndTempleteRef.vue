<script setup>
    import {ref, onMounted} from "vue"
    import HLifeCycleAndTempleteRef from './HLifeCycleAndTempleteRef.vue'
    const count = ref(0)
 
    const refp = ref(null)
    onMounted(() => {
        console.log(refp.value)
    })
    function change() {
        count.value ++
        refp.value.textContent =  refp.value.textContent +count.value
        if(count.value%2 == 0) {
            refp.value.className = 'red'
        } else{
            // document.getElementById("#11").removeAttribute
            refp.value.removeAttribute('class')
        }
    }
</script>

<template>
    <p ref="refp" >初始内容</p>
    <button @click="change">修改dom内容</button>

    <HLifeCycleAndTempleteRef/>
</template>

<style>
.red{
    color: red;
}
</style>