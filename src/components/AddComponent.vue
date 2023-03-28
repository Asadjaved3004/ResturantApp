<template>
   
   <div>
<HeaderComponent />
    <h1> Welcome to Add Restaurant Page</h1>
    <form class="add">
        <!--------------v-model is two way binding data is insert in field and also get data from field------------------->
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name"/>
        <input type="text" placeholder="Enter Address"  v-model="restaurant.address" name="address"/>
        <input type="text" placeholder="Enter Contact"  v-model="restaurant.contact" name="contact"/>
        <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
    </form>
   
   </div>

    
</template>
<script>
import axios from 'axios'
import HeaderComponent from './HeaderComponent.vue'
export default{
    name:'AddComponent',
    components:{
HeaderComponent
    },
    data(){
        return{
            restaurant:{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods:{
     async  addRestaurant(){
            console.warn(this.restaurant)
            const result =await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            if(result.status==201){
                this.$router.push('Home');
            }
            console.warn("result",result)
        }
    },
     //life cycle method run when page is load
    mounted(){
        let user= localStorage.getItem('user-info');
        if(!user){
            this.$router.push('/');

        }
    }
}
</script>