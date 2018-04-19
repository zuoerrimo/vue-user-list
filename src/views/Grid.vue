<template>
<div>
  <grid-layout
        :layout="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
      >
        <grid-item v-for="item in layout"
          class="grid"        
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :key="item.i"
          :i="item.i">
          {{item.text}}
        <component v-bind:is="item.component"> </component>
        </grid-item>
    </grid-layout>
</div>
</template>

<script>
import {GridLayout, GridItem} from 'vue-grid-layout'

export default {
  components:{
    GridLayout,
    GridItem,
  },
  data(){
    return {
      layout: [
      {"x":0,"y":0,"w":2,"h":2,"i":"0",text:'第一个',compentent:"组件"},
      {"x":2,"y":0,"w":2,"h":4,"i":"1",text:'第2个',compentent:"组件"},
      {"x":4,"y":0,"w":2,"h":5,"i":"2",text:'第3个',compentent:"组件"},
      {"x":6,"y":0,"w":2,"h":3,"i":"3",text:'第4个',compentent:"组件"},
      ] 
    } 
  },
}
</script>
<style type="text/css" scoped>
  .grid{
    background-color: red;
    border: 1px solid #000
  }
</style>
