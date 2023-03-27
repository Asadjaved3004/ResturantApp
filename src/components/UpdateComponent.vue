<template>
   
   <div>
<HeaderComponent />
    <h1> Welcome to Update  Restaurant Page </h1>
   
   </div>

    
</template>
<script>
import HeaderComponent from './HeaderComponent.vue'
export default{
    name:'UpdateComponent',
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