<template>
<div>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-12">
        <label>name:</label>
         <input
            type="text"
            class="form-control"
            v-model="userName"
            placeholder="userName"
          />
      </div>
    </div>
   <div class="form-group"
      <div class="col-sm-12">
        <label>gender:</label>
         <select  class="form-group" v-model='gender'>
          <option value='male'>男</option>
          <option vlaue='female'>女</option>
         </select>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>age:</label>
         <input
            type="text"
            class="form-control"
            v-model="age"
            placeholder="age"
          />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>hobby:</label>
         <input
            type="text"
            class="form-control"
            v-model="hobby"
            placeholder="hobby"
          />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <button class="btn btn-primary" @click="cancel()">取消</button>
  </div>
</div>
</template>

<script>
  export default {
    props: {
    },
    data() {
      return {
        userName : '',
        gender : '',
        age : '',
        hobby : '',
      }
    },
    methods:{
      save() {
        const user = {
          name : this.userName,
          age : this.age,
          gender : this.gender,
          hobby : this.hobby,
        };
        this.$store.dispatch('saveUser', user)
        this.$emit('closeModal')
      },
      cancel() {
        this.$emit('closeModal')
      },
    }
  }
</script>