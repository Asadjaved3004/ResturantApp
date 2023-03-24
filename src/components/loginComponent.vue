<template>
   <img class="logo" src="../assets/logo.png"/>
   <div class="login">
    <h1>Login </h1>
    
        <input type="text" v-model="email" placeholder="Enter Email"/><br>
        <input type="password"  v-model="password" placeholder="Enter Password"/>
        <button>Login</button>
        <p>If you have New User Please <router-link to="SignUp">create Account</router-link></p>
    </div>
    
</template>

<script>
// import axios from 'axios'

export default{
    name:'loginComponent',
    data(){
        return {
            
            email:'',
            password:''
        }
    },
}
</script>
<style scoped>

</style>
