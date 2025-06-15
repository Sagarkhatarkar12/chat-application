import { createRouter,createWebHistory } from "vue-router";
import Home from "../components/ChatNavigation.vue"
import chat from "../components/chat_contact.vue"
import contact from "../components/contactPage.vue"
import Phone from "../components/Phone.vue"
import VideoCall from "../components/VideoCall.vue"
import save from "../components/Save.vue"
import settingPage from "../components/SettingPage.vue"
const routes =[
    // {path: '/',component:???Home},
    {   path: '/chat',component:chat},
    {   path: '/contact',component:contact},
    {   path: '/phone',component:Phone},
    {   path: '/Video',component:VideoCall},
    {   path: '/Save',component:save},
    {   path: '/setting',component: settingPage},
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router