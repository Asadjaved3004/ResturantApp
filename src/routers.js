
import HomeComponent from "./components/HomeComponent.vue";
import SignUp from "./components/SignUp.vue";
import loginComponent from "./components/loginComponent.vue"
import {createRouter,createWebHistory} from "vue-router";

const routes=[
    {
        name:"HomeComponent",
        component:HomeComponent,
        path:"/Home",

    },
    {
        name:"SignUp",
        component:SignUp,
        path:"/SignUp",
    },
  
        {
          path: "/",
          name: 'home',
          component: HomeComponent
        },
        {
            path: "/login",
            name: 'loginComponent',
            component: loginComponent
          }
      ]
    
const router=createRouter({
    history:createWebHistory(),
    routes

});
export default router;

