<template>
<div class="nav"> 
    <a href="#">Home</a>
    <router-link href="AddComponent">Add Restaurant</router-link>
    <router-link href="#">Update Restaurant</router-link>
    <a href="#">About</a>
    <a v-on:click="logout" href="#">Logout</a>
 
</div>
</template>
<script>

export default {
    name:'HeaderComponent',
    methods:{
        logout(){
            console.warn("logout");
            localStorage.clear();
            this.$router.push('login')
        }
    }
}
</script>
<style scoped>
.nav{
    background-color: #000;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #f2f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background-color: #ddd;
    color: #333;
}
</style>
