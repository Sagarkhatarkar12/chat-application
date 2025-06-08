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
                :userName="'jone'" />
            <Online
                :src="'data:image/jpeg;base64,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'"
                :userName="'Jago'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'jone'" />
            <Online
                :src="'data:image/jpeg;base64,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'"
                :userName="'Doe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'Doe'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/old-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'Sagu'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'Sago'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'Naplute'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'jone'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'jone'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'jone'" />
            <Online
                :src="'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740'"
                :userName="'jone'" />


        </div>
        <Heading :title="'Message'" />
        <div class="message-container">
            <message v-for="(item, index) in AllContacts" :key="item.index" :typing="item.typing" :unRead="item.unRead"
                :userName="item.name" :seen="item.seen" :sent="item.sent" :delivered="item.delivered" :src="item.src" />
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
    },
    data() {
        return {
            //   unRead :["hii hello ","I am sagar","Hii delete sagar"],
            AllContacts: [
                {
                    name: "Sagar",
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: true,
                    unRead: 3,
                    Online: true
                },
                {
                    name: "Jago",
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: true,
                    unRead: 0,
                    Online: false

                },
                {
                    name: "Doe",
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false, sent: true,
                    delivered: false,
                    seen: false,
                    unRead: 2,
                    Online: false
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false, sent: true,
                    delivered: false,
                    seen: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0, sent: false,
                    delivered: true,
                    seen: false,
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",

                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 0
                },
                {
                    name: "Sagu",
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    sent: true,
                    delivered: false,
                    seen: false,

                    unRead: 0
                },
                {
                    name: "Naplute",
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5PMuKNpA35AiK1sPXzzFuSaJPaUc2FSawQ&s",
                    typing: false,
                    Online: false,
                    unRead: 1
                }
            ]

        }
    },
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