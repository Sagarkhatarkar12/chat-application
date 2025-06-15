<template>

    <div class="chatBig">
        <div class="chatBig-header">
            <div class="chatBig-header-message">
                <h1>{{ userName }}</h1>
                <MessageLayout :chatBigHeader=true :typing="true" :userName="userName" :src="src" />
            </div>
            <div class="chatBig-header-icons">
                <NavIcon icon="i ri-phone-line" title="Chat" />
                <NavIcon icon="ri-video-on-ai-line" title="Profile" />
                <NavIcon icon="ri-more-2-fill" title="Call" />
            </div>
        </div>
        <div class="chatBig-body">
            <!-- Chat messages will go here -->
            <div class="chatBig-body-system">
                <p>Today</p>
            </div>
            <div class="chatBig-body-message-container">

                <chat_item :sender="true" :message="'Hello'" :delivered="true" />
                <chat_item :sender="false" :message="'hii'" :delivered="true" />
                <chat_item :sender="true" :message="'How are you'" :read="true" />
                <chat_item :sender="false" :message="'I am find'" :read="true" />
                <chat_item :sender="true" :message="'where you liviing '" :delivered="true" />
                <chat_item :sender="false" :message="'betul mp madhya pradesh'" :sent="true" />

            </div>
            <div class="chatBig-input">

                <AddMessage />
            </div>

        </div>

    </div>
</template>
<script>

import MessageLayout from './MessageLayout.vue';
import NavIcon from './NavIcon.vue';
import chat_item from './chat_item.vue';
import AddMessage from './Add_message.vue';
export default {
    props: {
        id: {
            type: Number,
            requried: true
        },
        userName: {
            type: String,
            requried: true
        },
        src: {
            type: String,
            requried: true
        }
    },
    components: {

        MessageLayout,
        NavIcon,
        chat_item,
        AddMessage,
    },
}
</script>
<style styled lang="scss" scoped>
.chatBig {
    position: relative;
    background-color: #0a0e0f;
    // width: 50rem;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;


    &-header {

        height: 4.73rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0rem 1rem;
        border: 1px solid #2c3031;

        &-message {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &-icons {
            // width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

        }
    }

    &-body {
        // flex: 1;
        width: 100%;
        overflow-y: auto;
        height: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 1px solid #2c3031;

        &-system {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;

            // background-color: red;
            p {
                color: #737879;
                font-size: 0.9rem;
            }
        }
    }

    &-input {
        position: absolute;
        bottom: 0rem;
        width: 99.7%;
        left: 1px;



    }


}
</style>