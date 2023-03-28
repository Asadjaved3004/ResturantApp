<template>
   
   <div>
<HeaderComponent />
    <h1> Hello {{ name }}, Welcome to Home Page</h1>
    <table border="1">
    <tr>
    <th style="background-color: #eee; font-weight: bold;">Id</th>
    <th style="background-color: #eee; font-weight: bold;">Name</th>
    <th style="background-color: #eee; font-weight: bold;">Address</th>
    <th style="background-color: #eee; font-weight: bold;">Contact</th>
    <th style="background-color: #eee; font-weight: bold;">Actions</th>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.contact }}</td>
                <td>
                    <button><router-link :to="'/Update/'+item.id">Update</router-link></button>
                <button v-on:click="deleteRestaurant(item.id)"><router-link :to="'/Home/'">Delete</router-link></button>
                </td>
        </tr>
    </table>
   
   </div>

    
</template>
<script>
import axios from 'axios';
import HeaderComponent from './HeaderComponent.vue'
export default{
    name:'HomeComponent',
    data(){
        return{
            name:'',
            restaurants:[],
        }
    },
    methods:{
        async deleteRestaurant(id){
            let result=await axios.delete("http://localhost:3000/restaurant/"+id);
            console.warn(result)
            if(result.status==200){
                this.loadData();
            }
        },
      async loadData(){
            let user= localStorage.getItem('user-info');
        this.name=JSON.parse(user).name;
        if(!user){
            this.$router.push('Home');

        }
        let result=await axios.get("http://localhost:3000/restaurant");
        console.warn(result);
        this.restaurants=result.data;
    }
},
    components:{
    HeaderComponent,
    },
     //life cycle method run when page is load
   async  mounted(){
this.loadData();
}
}
</script>

<style scoped>
td{
    width: 160px;
    height: 40px;
}
</style>