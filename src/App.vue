<template>
  <n-config-provider :theme="darkTheme">
    <!-- 声明式渲染 -->
    <p>1.声明式渲染</p>
    <DeclarRending/>
    <br>  
    <br>  
    <p>2.Attribution 绑定</p>
    <AttributionBind/>
    <br>  
    <br>  
    <br>  
    <p>3.事件 绑定</p>
    <EventListening/>
    <br>  
    <br>  
    <br>  
    <p>4.表单绑定</p>
    <FormBinding/>
    <br>  
    <br>  
    <p>5.条件渲染</p>
    <ConditionRending/>
    <br>  
    <br>  
    <p>6.列表渲染</p>
    <ListRending/>
    <br>  
    <br>  
    <p>7.计算属性</p>
    <ComputeAttr/>
    <br>  
    <br>  
    <p>8.生命周期和模板引用</p>
    <LifeCycleAndTempleteRef/>
    <br>  
    <br>  
    <p>9.侦听器</p>
    <MyLisitening/>
    <br>  
    <br>  
    <p>10.Props & Emit</p>
    <Parent/>

  </n-config-provider>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import { darkTheme } from "naive-ui";
import DeclarRending from "./interaction/DeclarRending.vue";
import AttributionBind from "./interaction/AttributionBind.vue";
import EventListening from "./interaction/EventListening.vue";
import FormBinding from "./interaction/FormBinding.vue";
import ConditionRending from "./interaction/ConditionRending.vue";
import ListRending from "./interaction/ListRending.vue";
import ComputeAttr from "./interaction/ComputeAttr.vue";
import LifeCycleAndTempleteRef from "./interaction/LifeCycleAndTempleteRef.vue";
import MyLisitening from "./interaction/MyLisitening.vue";
import Parent from "./interaction/Parent.vue";

export default defineComponent({
  name: 'App',
  components: {
    DeclarRending, 
    AttributionBind,
    EventListening,
    FormBinding,
    ConditionRending,
    ComputeAttr,
    LifeCycleAndTempleteRef,
    MyLisitening,
    Parent,
    ListRending
  },
  setup() {
    return {
      darkTheme,
    }
  }
});
</script>