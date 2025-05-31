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
                <p><i class="ri-more-2-fill"></ i>
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

            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'joneDoe'" />


        </div>
        <Heading :title="'Message'" />
        <div class="message-container">
            <message :typing="true" :src = "'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s'"/>
            <message :src = "'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s'"/>
            <message :src = "'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s'"/>
            <message :src = "'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s'"/>
            <message :src = "'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s'"/>
            <message :src = "'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s'"/>
            <message :src = "'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s'"/>
            <message :src = "'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s'"/>
            <message :src = "'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s'"/>
            <message :src = "'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s'"/>
        </div>

    </div>

</template>

<script>
import Avatar from "./Avatar.vue";
import Online from "./OnlineUser.vue";
import Heading from "./Heading.vue";
import message from "../components/MessageLayout.vue"
export default {
    components: {
        Avatar,
        Online,
        Heading,
        message
    }
}
</script>
<style lang="scss">
.chat-container {
    width: 20rem;
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
                left: 1rem;
                top: 0.9rem;
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
    height: 200px;
    display: flex;
    // flex-direction: column;
    gap: 0.5rem;
    padding: 0.3rem 1rem;
    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 0.3rem;
        height: 0.1rem;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #47a6c3;
        border-radius: 10px;
    }
}
.message-container{
    display: flex;
    align-items: center;
    flex-direction: column;
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