<template>
    <img class="logo" src="../assets/logo.png"/>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/><br>
        <input type="text" v-model="email" placeholder="Enter Email"/><br>
        <input type="password"  v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signUp">Sign Up</button>
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
      async  signUp(){
           let result = await axios.post("http://localhost:3000/user",{
            email:this.email,
            name:this.name,
            password:this.password
           });
           console.warn(result);
           if(result.status==201){
            alert("sign-up done");
           }
        }
    }
}
</script>
<style scoped>
.logo{
    width:200px;
}
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>
