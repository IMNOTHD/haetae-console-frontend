import Login from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import PersonalCenter from "@/pages/Main/SystemControl/PersonalCenter";
import AuthorityControl from "@/pages/Main/SystemControl/AuthorityControl";
import ActivityCreate from "@/pages/Main/ActivityControl/ActivityCreate";
import StateControl from "@/pages/Main/ActivityControl/StateControl";
import Index from "@/pages/Main/Index";

const routers = [{
    path: "/login",
    name: "login",
    component: Login
}, {
    path: "/",
    name: "MainPage",
    component: MainPage,
    children: [{
        path: "",
        name: "Index",
        component: Index,
    },{
        path: "/Activity/ActivityCreate",
        name: "ActivityCreate",
        component: ActivityCreate,
    },{
        path: "/Activity/StateControl",
        name: "StateControl",
        component: StateControl,
    },
        {
        path: "/SystemControl/PersonalCenter",
        name: "PersonalCenter",
        component: PersonalCenter,
    },{
        path: "/SystemControl/AuthorityControl",
        name: "AuthorityControl",
        component: AuthorityControl,
    }]
}, {
    path: '*',
    redirect: '/'
}]

export default routers
