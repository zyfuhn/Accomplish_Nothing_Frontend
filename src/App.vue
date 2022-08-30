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

export default defineComponent({
  name: 'App',
  components: {
    DeclarRending, 
    AttributionBind,
    EventListening,
    FormBinding,
    ConditionRending,
    ListRending
  },
  setup() {
    return {
      darkTheme,
    }
  }
});
</script>