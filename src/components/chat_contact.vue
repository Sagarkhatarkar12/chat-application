<template>
    <div class="chat-container">
        <div class="chat-container-contact">
            <div class="chat-container-contact-item">
                <Avatar
                    :src="'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740'" />
                <div class="chat-container-contact-item-name">
                    <h3>Sagar khatarkar</h3>
                    <p>my account</p>
                </div>
            </div>
            <div class="chat-container-contact-drop-down">
                <p><i class="ri-more-2-fill"></i>
                </p>
            </div>
        </div>
        <div class="chat-container-search">

            <div class="chat-container-search-input">
                <i class="ri-search-line"></i>
                <input type="search" placeholder="Search or start new chat" />

            </div>
        </div>
        <Heading :title="'online Now'" />
        <div class="onlineCollection">
            <online v-for="(item, index) in chatManage.contactMessageDetails" :key="index" :src="item.pro_img"
                :userName="item.userName" />



        </div>
        <Heading :title="'Message'" />
        <!-- <h2>{{ receviedMessage }}</h2> -->
        <div class="message-container">

            <message @id = HandleId v-for="(item, index) in chatManage.contactMessageDetails" :key="item.id" :id="item.id" :typing="item.typing"
                :unRead="item.Unseen" :userName="item.userName" :message="item.lastMessage" :src="item.pro_img" />

            <!-- <message v-for="(item, index) in AllContacts" :key="item.index" :typing="item.typing" :unRead="item.unRead"
                :userName="item.name" :seen="item.seen" :sent="item.sent" :message="item.message"
                :delivered="item.delivered" :src="item.src" /> -->
            <!-- <message v-for="(item,index) in ChatData" :key = "index /> -->
        </div>

    </div>


</template>

<script>
import Avatar from "./Avatar.vue";
import Online from "./OnlineUser.vue";
import Heading from "./Heading.vue";
import message from "../components/MessageLayout.vue";
import { useChatStore } from "../stores/chatMange.js"

// console.log(chatMange.state)
export default {
    setup() {
        const chatManage = useChatStore();
        console.log(chatManage)
        return { chatManage }


    },
    components: {
        Avatar,
        Online,
        Heading,
        message
    },
    data() {
        return {
            receviedMessage:"",


        }
        
    },
    methods :{
       HandleId(data){
            // console.log(data)
        this.$emit('id', data)
        }
    }
}
</script>
<style lang="scss">
.chat-container {
    width: 23rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    background-color: #161b1c;
    gap: 1rem;

    &-contact {
        width: 100%;
        padding: 1rem 1rem;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid #202427;

        &-item {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            gap: 0.9rem;

        }

        &-item-name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.2rem;

            h3 {
                font-size: 1.2rem;
                font-weight: 600;
            }

            p {
                font-size: 0.9rem;
                color: #737879;
            }
        }

        &-drop-down {
            height: 100%;


            p {
                font-size: 1.3rem;
                height: 40px;
                width: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border-radius: 50%;
                transition: all 100ms ease-in-out;
                border: 2px solid gray;

                &:hover {
                    background-color: #47a6c3;
                    border: none;
                }
            }
        }

    }

    &-search {
        width: 90%;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem 3rem;
        background-color: #202427;
        border-radius: 0.5rem;
        margin: 0rem 1rem;
        position: relative;

        &-input {
            width: 100%;
            height: 100%;

            i {
                position: absolute;
                left: 0.7rem;
                top: 0.5rem;
                color: #737879;
                font-size: 1.2rem;
            }

            input {
                width: 100%;
                height: 100%;
                background-color: transparent;
                border: none;
                color: white;
                font-size: 1rem;
                outline: none;
            }
        }
    }
}

.onlineCollection {
    width: 100%;
    height: 10rem;
    display: flex;
    // flex-direction: column;
    gap: 1rem;
    align-items: center;

    padding: 0rem 1rem;
    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 0.3rem;
        display: none;
        height: 0.1rem;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #47a6c3;
        border-radius: 10px;
    }
}

.message-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0.3rem;
        height: 0rem;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {

        background-color: #47a6c3;
        border-radius: 10px;
    }
}
</style>