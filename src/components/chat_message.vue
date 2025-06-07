<template>

<div class="chatBig">
    <div class="chatBig-header">
        <div class="chatBig-header-message">
        <MessageLayout :chatBigHeader = true  :typing="true" :user-name="'Sagar khatarkar'" src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740"/>
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
            <chat_item :sender="true"/>
         </div>
         </div>
     
</div>
</template>
<script>

import MessageLayout from './MessageLayout.vue';
import NavIcon from './NavIcon.vue';
import chat_item from './chat_item.vue';
export default{
    components: {
        
        MessageLayout,
        NavIcon,
        chat_item
    },
}
</script>
<style styled lang="scss" scoped>
.chatBig{
    background-color: #161b1c;
    // width: 50rem;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
   

    &-header{
 
        height: 4.73rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0rem 1rem;
        
        border: 1px solid #2c3031;
        &-message{
            // width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-icons{
            // width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

        }
    }

    &-body{
        // flex: 1;
        width: 100%;
        overflow-y: auto;
        height: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &-system{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            // background-color: red;
            p{
                color: #737879;
                font-size: 0.9rem;
            }
        }
    }
    
}
</style>