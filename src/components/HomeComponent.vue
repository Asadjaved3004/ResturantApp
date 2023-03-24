<template>
   
   <div>

    <h1> Welcome to Home Page</h1>
   
   </div>

    
</template>
<script>
export default{
    name:'HomeComponent',
    mounted(){
        let user= localStorage.getItem('user-info');
        if(!user){
            this.$router.push('/');

        }
    }
}
</script>