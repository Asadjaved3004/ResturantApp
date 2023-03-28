
<!----------------Sign Up Form--------------------------------------------------->
<template>
    <img class="logo" src="../assets/logo.png"/>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/><br>
        <input type="text" v-model="email" placeholder="Enter Email"/><br>
        <input type="password"  v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signup">Sign Up</button>
        <p>If You have Already Account Please<router-link to="login">Login</router-link></p>
    </div>
  
</template>


<script>
import axios from 'axios'
export default{
    name:'SignUp',
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
      async  signup(){
           let result = await axios.post("http://localhost:3000/user",{
            email:this.email,
            name:this.name,
            password:this.password
           });
           console.warn(result);


           if(result.status==201){
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push('/SignUp')
           }
        }
    },
     //life cycle method run when page is load
    mounted(){
        let user= localStorage.getItem('user-info');
        if(user){ 
            this.$router.push('/SignUp')

        }
    }
}
</script>
<style scoped>

</style>
