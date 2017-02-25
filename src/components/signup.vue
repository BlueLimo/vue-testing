<template>
<div class="login-area">
  <div class="row">
      <div class="signup-panel">
        <p class="welcome"> Sign Up Form</p>
        <form>
          <div class="row collapse">
            <div class="small-12  columns">
              <input v-model="user.username" type="text" placeholder="Enter your email address here">
            </div>
          </div>
          <div class="row collapse">
            <div class="small-12 columns ">
              <input v-model="user.password" type="password" placeholder="Enter password here">
            </div>
          </div>
        </form>
        <button @click.prevent="signupUser" class="button ">Sign up </button>
         <p>Already have account? <router-link to = "/">Signin here</router-link></p>
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

    	user: 
    	{
    		  username: null,
      		password: null
    	}
      
    }
  },
  methods: {

    //signup function here
    signupUser () 
    {

        Vue.http.post('http://test-routes.herokuapp.com/auth/register', this.user)
        .then(function (response) 
        {
        	console.log(response);

           //localStorage.setItem ('token', response.data.token);

           //console.log(localStorage.getItem('token'))

         }, function (error) {
          

           console.log('Please use correct details', response)
         })
    }
  },
  mounted () {

  }
}
</script>

<styles> 

</styles>
