<template>
  <div>
    <button>test</button> 
  </div>
</template>
<script>
  export default {
    props: ['num'],
    data() {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    mounted() {
      console.log(typeof(this.num), '===num==', this.num)
    },
    created() {
    }
  }
</script>