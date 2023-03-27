<template>
   
   <div>
<HeaderComponent />
    <h1> Welcome to Add Restaurant Page</h1>
   
   </div>

    
</template>
<script>
import HeaderComponent from './HeaderComponent.vue'
export default{
    name:'AddComponent',
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