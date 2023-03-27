
import HomeComponent from "./components/HomeComponent.vue";
import SignUp from "./components/SignUp.vue";
import loginComponent from "./components/loginComponent.vue";
import AddComponent from "./components/AddComponent.vue";
import UpdateComponent from "./components/UpdateComponent.vue"
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
        name:"Add",
        component:AddComponent,
        path:"/AddComponent",
    },
    {
        name:"Update",
        component:UpdateComponent,
        path:"/Update",
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

