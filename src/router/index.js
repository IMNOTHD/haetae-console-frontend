import Login from "@/pages/Login";
import MainPage from "@/pages/MainPage";

const routers = [{
    path: "/login",
    name: "login",
    component: Login
}, {
    path: "/",
    name: "MainPage",
    component: MainPage
}, {
    path: '*',
    redirect: '/'
}]

export default routers
