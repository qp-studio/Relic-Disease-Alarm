<template>
        <div style="width: 1000px;height:500px;display:flex;">
             <v-chart class="chart" :option="option1" />
             <v-chart class="chart" :option="option2" />
	        <v-chart class="chart" :option="option3" />
        </div>
       
        
 
</template>

<script setup>
    import * as echarts from 'echarts/core';
    import { ref } from 'vue';
    import { reactive } from 'vue'
    import { use } from 'echarts/core';
    import { LineChart } from 'echarts/charts';
    import { GridComponent, TimelineComponent, TitleComponent } from 'echarts/components';
    import { UniversalTransition } from 'echarts/features';
    import { CanvasRenderer } from 'echarts/renderers';
    import VChart from 'vue-echarts';

    use([
    GridComponent,
    LineChart,
    CanvasRenderer,
    UniversalTransition,
    TitleComponent,
    ])
    
 

    const option1 = ref({
  title:{
    text: "温度",
    left: "center",
     bottom: "0%",
    textStyle: {
      fontSize: 30
    },
   
  },
  color:"blue",
  xAxis: {
    type: 'category',
      
    data: ['13：10', '14：00', '15：00', '16：00', '17：00', '18：00', '19：00']
  },
  yAxis: {
    type: 'value',
    name: '℃'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
})
    const option2 =  ref({
  title:{
    text: "湿度",
    left: "center",
     bottom: "0%",
    textStyle: {
      fontSize: 30
    },
   
  },
  color:"blue",


  xAxis: {
    type: 'category',
    
    data: ['13：00', '14：00', '15：00', '16：00', '17：00', '18：00', '19：00']
  },
  yAxis: {
    type: 'value',
    name: "%"
  },
  series: [
    {
      data: [80, 81, 82, 81, 80, 83, 85],
      type: 'line'
    }
  ]
})  
    const option3 = ref( {
  title:{
    text: "有害气体",
    left: "center",
     bottom: "0%",
    textStyle: {
      fontSize: 30
    },
   
  },
  color:"blue",
  xAxis: {
    type: 'category',
    
    data: ['13：00', '14：00', '15：00', '16：00', '17：00', '18：00', '19：00']
  },
  yAxis: {
    type: 'value',
    name: "%",
    min:0,
    max:0.1,
  },
  series: [
    {
      data: [0.01, 0.02, 0.01, 0.01, 0.01, 0.01, 0.02],
      type: 'line'
    }
  ]
})

 

</script>
<style scoped>

</style>
