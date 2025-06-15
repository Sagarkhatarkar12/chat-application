import { defineStore } from "pinia";

export const useChatStore = defineStore("chatMange", {
    state: () => ({
        contactMessageDetails :[
            {
                id :1,
                pro_img :"https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
                userName:"Deepak khatarkar",
                status: "sent",
                typing :true,
                online:true,
                Unseen:"",
                time: "12:30pm",
                lastMessage:"hey how are you"
            }
            ,
            {
                id :2,
                pro_img :"https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
                userName:"Sagar khatarkar",
                status: "read",
                typing :false,
                online:false,
                Unseen:"",
                time: "12:30Am",
                lastMessage:"nothing"

            },
            {
                id :3,
                pro_img :"https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
                userName:"Sagar khatarkar",
                status: "read",
                typing :false,
                online:false,
                Unseen:"",
                time: "12:30Am",
                lastMessage:"nothing"

            }
        ]
    })
    
});
