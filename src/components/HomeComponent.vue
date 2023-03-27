<template>
   
   <div>
<HeaderComponent />
    <h1> Welcome to Home Page</h1>
   
   </div>

    
</template>
<script>
import HeaderComponent from './HeaderComponent.vue'
export default{
    name:'HomeComponent',
    components:{
HeaderComponent
    },
    mounted(){
        let user= localStorage.getItem('user-info');
        if(!user){
            this.$router.push('/');

        }
    }
}
</script>