<template>
   
   <div>
<HeaderComponent />
    <h1> Welcome to Update  Restaurant Page </h1>
    <form class="update">
        <!--------------v-model is two way binding data is insert in field and also get data from field------------------->
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name"/>
        <input type="text" placeholder="Enter Address"  v-model="restaurant.address" name="address"/>
        <input type="text" placeholder="Enter Contact"  v-model="restaurant.contact" name="contact"/>
        <button type="button" v-on:click="updateRestaurant">Update  Restaurant</button>
    </form>
   </div>

    
</template>
<script>
import HeaderComponent from './HeaderComponent.vue'
import axios from 'axios';
export default{
    name:'UpdateComponent',
    components:{
HeaderComponent
    },    data(){
        return{
            restaurant:{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods:{
      async updateRestaurant(){
        console.warn(this.restaurant)
        ///we are updating the data so we use put request
        const result =await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            });
            if(result.status==200){
                this.$router.push('/Home');
            }
        }
    },
     //life cycle method run when page is load
   async  mounted(){
        let user= localStorage.getItem('user-info');
        if(!user){
            this.$router.push('SignUp');

        }
        const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
/////////Data Prefilling////////////
        this.restaurant=result.data
    }
}
</script>