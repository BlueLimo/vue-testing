<template>
<div class="login-area">
  <div class="row">
      <div class="signup-panel">
        <form>
        <p class="welcome"> Login Form</p>
          <div class="row collapse">
            <div class="small-12  columns">
              <input v-model="username" type="text" placeholder="Enter your email address here">
            </div>
          </div>
          <div class="row collapse">
            <div class="small-12 columns ">
              <input v-model="password" type="password" placeholder="Enter password here">
            </div>
          </div>
        </form>
        <button @click.prevent="login" class="button ">Sign in </button>
         <p>Don't have account? <router-link to = "/signup">Signup here</router-link></p>
      </div>
   </div>
  </div>
</template>

<script>

import Vue from 'vue';
import VueResource from 'vue-resource';

export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login () 
    {
      //login function goes here

    }
  },
  mounted () {

  }
}
</script>

<styles> 

</styles>
