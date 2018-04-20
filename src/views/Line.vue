<template>
<div>
  <div ref="chart" class="chart">
    
  </div>
</div>
</template>

<script>
  import * as echarts from 'echarts'
  export default {
    props: {
    },
    data() {
      return {
      }
    },
    computed: {

    },
    methods:{
    },
    mounted() {
      echarts.init(this.$refs.chart).setOption({
        series: {
          type: 'pie',
          data: [
              {name: 'A', value: 1212},
              {name: 'B', value: 2323},
              {name: 'C', value: 1919}
          ]
        }
      })
    },
    created() {

    }
  }
</script>
<style scoped>
  .chart {
    height: 500px;
  } 
</style>