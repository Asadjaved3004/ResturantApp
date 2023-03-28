<template>
   <img class="logo" src="../assets/logo.png"/>
   <div class="login">
    <h1>Login </h1>
    
        <input type="text" v-model="email" placeholder="Enter Email"/><br>
        <input type="password"  v-model="password" placeholder="Enter Password"/>
        <button v-on:click="login">Login</button>
        <p>If you have New User Please <router-link to="SignUp">create Account</router-link></p>
    </div>
    
</template>

<script>
import axios from 'axios'

export default{
    //Component Name
    name:'loginComponent',
    //function that return email and password
    data(){
        return {
            
            email:'',
            password:''
        }
    },
    methods:{
      async  login(){
            let result=await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            )
            //check status and data length according to result route to Home
            if(result.status==200 && result.data.length>0){
            localStorage.setItem("user-info",JSON.stringify(result.data[0]))
            this.$router.push('/Home')
           }
            console.warn(result)
        }
    },
    //life cycle method run when page is load
    mounted(){
        let user= localStorage.getItem('user-info');
        if(user){ 
            this.$router.push('/Home')

        }
    }
}
</script>
<style scoped>

</style>
