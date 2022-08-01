<template>
  <div style="width:40%;margin:20px auto">
   
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fq_70%2Fimages03%2F20201113%2Fe13ac041fa8340c7aee29ea48bfcef3f.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661747492&t=1df7d0411a49e4f0f7f2f42940476448" class="img-fluid"  >
    
  </div>
  <table class="table table-bordered border-primary">
    <thead>
      <tr>
        <th style="text-align:center" scope="col">采集时间</th>
        <th style="text-align:center" scope="col">温度</th>
        <th style="text-align:center" scope="col">湿度</th>
        <th style="text-align:center" scope="col">有害气体</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center" >{{ relic.time }}</td>
        <td style="text-align:center">{{ relic.tem }}</td>
        <td style="text-align:center">{{ relic.humidity }}</td>
        <td style="text-align:center">{{ relic.harm }}</td>
      </tr>
      
    </tbody>
    </table>
    <div class="detailimg">
      <div style="width:30%;margin:0 auto;text-align:center">
        <p>病害识别图 </p>
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fq_70%2Fimages03%2F20201113%2Fe13ac041fa8340c7aee29ea48bfcef3f.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661747492&t=1df7d0411a49e4f0f7f2f42940476448" class="img-fluid"  >
         <p>病害类别：孔洞</p>
      </div>

      <div style="width:30%;margin:0 auto;text-align:center">
        <p>病害分割图</p>
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fq_70%2Fimages03%2F20201113%2Fe13ac041fa8340c7aee29ea48bfcef3f.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661747492&t=1df7d0411a49e4f0f7f2f42940476448" class="img-fluid"  >
        <p>病害大小：1024像素</p>
      </div>
      <div class="legend">
        <div class="legend-item">
          <div style="width: 30px;height:14px;background:red;margin:0 auto"></div>
          <p> 孔洞</p>
        </div>
        <div class="legend-item">
          <div style="width: 30px;height:14px;background:blue;margin:0 auto"></div>
          <p> 裂缝</p>
        </div>
        <div class="legend-item">
          <div style="width: 30px;height:14px;background:yellow;margin:0 auto"></div>
          <p> 残缺</p>
        </div>
        <div class="legend-item">
          <div style="width: 30px;height:14px;background:green;margin:0 auto"></div>
          <p> 瘤状物</p>
        </div>
      </div>
  </div>

</template>

<script setup>
import { reactive } from 'vue'


// const data_option = reactive({
//   xAxis: {
//     data: ['A', 'B', 'C', 'D', 'E']
//   },
//   yAxis: {},
//   series: [
//     {
//       data: [10, 22, 28, 23, 19],
//       type: 'line',
//       smooth: true
//     }
//   ]
// })
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref } from 'vue';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

const relic = reactive({
 time: '2022-1-1',
  tem: '24',
  humidity: '20',
  harm: '0',
  kind: '孔洞',
  size: '1024',
})
const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})

</script>

<style scoped>
.legend{
  margin:auto 0;
 
}
.detailimg{
 
  display: flex;
  flex-direction: row;
   
}
.legend-item{
  display:flexbox;
  flex-direction: row;
  text-align: center;
}
</style>
