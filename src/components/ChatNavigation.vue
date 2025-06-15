<script>
import Avatar from './Avatar.vue';
export default {
    components: {
        Avatar
    }
}

</script>
<template>
    <div class="chat-Navigation-container">
        <div class="chat-Navigation-container-heading">
            <router-link to="/">
            <img src="../../chat.png" alt="">

            </router-link>
        </div>
        <div class="chat-Navigation-container-middleItem">

             <router-link to="/chat"><i class="ri-discuss-fill"></i> </router-link>
            <!-- <router-link to="/chat"></router-link>  -->
            <!-- <RouterLink to="chat" ></RouterLink> -->
            
            <router-link to="/contact"><i class="ri-user-line"></i></router-link>
            <router-link to="/phone"><i class="ri-phone-line"></i></router-link>
            <router-link to="/video"><i class="ri-live-line"></i></router-link>
            <router-link to="/Save"><i class="ri-bookmark-2-line"></i></router-link>
            <router-link to="/setting"><i class="ri-settings-2-line"></i></router-link>
          
        </div>
        <div class="chat-Navigation-container-last">
            <p><i class="ri-add-line"></i></p>
            <Avatar :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAXaRVdV1WIzPuhhLHZu6Nl9XqzC4Zy8jvw&s'" />
        </div>
    </div>


</template>


<style lang="scss">
.chat-Navigation-container {

    background-color: #161b1c;
    width: 5rem;
    border-right: 2px solid #202427;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #737879;
    min-height: fit-content;
    gap: 7rem;
}

.chat-Navigation-container {
    padding: 0.8rem 0rem !important;
}

.chat-Navigation-container-middleItem {
    display: flex;
    gap: 0.6rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.chat-Navigation-container-middleItem a {
    display: block;
    border-radius: 50%;
    height: 2.3rem;
    width: 2.5rem;
    color: gray;
    padding: 0.2rem 0rem;
    display: flex;
    
    font-size: 1.3rem;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 10ms ease-in-out;

     &:hover{
background-color: gray;
    color: white;
    }
}



.router-link-active{
    background-color: #47a6c3 !important;
    color: white !important;
}

.chat-Navigation-container-middleItem p i {
    font-size: 1.3rem;
}

.chat-Navigation-container-heading {
    height: 2.5rem;
    padding: 0.5rem;
    background-color: white;
    border-radius: 50%;
}

.chat-Navigation-container-heading img {
    height: 100%;
    width: 100%;
}

.chat-Navigation-container-last {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    gap: 1rem;
}

.chat-Navigation-container-last p {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 10ms ease-in-out;
    background-color: #7a7c7d;
    font-size: 1.5rem;
}

.chat-Navigation-container-last p img {
    height: 100%;
    width: 100%;
}
</style>