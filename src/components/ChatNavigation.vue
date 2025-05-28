
<script >
export default {

}

</script>
<template>
<div class="chat-Navigation-container">
    <div class="chat-Navigation-container-heading">
   <img src="../../chat.png" alt="">
    </div>
    <div class="chat-Navigation-container-middleItem">
<p class="active"><i class="ri-discuss-fill"></i></p>
<p><i class="ri-user-line"></i></p>
<p><i class="ri-phone-line"></i></p>
<p><i class="ri-live-line"></i></p>
<p><i class="ri-bookmark-2-line"></i></p>
<p><i class="ri-settings-2-line"></i></p>
    </div>
    <div class="chat-Navigation-container-last">
<p><i class="ri-add-line"></i></p>
<p><img src="../assets/image/profile.png" alt=""></p>
    </div>
</div>
</template>


<style>
.chat-Navigation-container{

    background-color:#161b1c;
    width: fit-content;
    border-right: 2px solid #202427;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    color:#737879;
    min-height: fit-content;
   padding: 0.2rem 2rem;
    gap: 5.4rem;
}
.chat-Navigation-container{
    padding :2rem 1rem !important;
}
.chat-Navigation-container-middleItem{
    display: flex;
    gap: 0.7rem;
    justify-content: center;
    align-items: center;

    flex-direction: column;

}

.chat-Navigation-container-middleItem p{
    border-radius: 50%;
    height: 3rem;
    width: 3rem;

    padding: 0.3rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 10ms ease-in-out;
}
.chat-Navigation-container-middleItem p:hover{
    background-color: gray;
    color: white;
}
.active{
background-color: #47a6c3!important;
color: white;
}
.chat-Navigation-container-middleItem p i{
    font-size: 1.4rem;
}
.chat-Navigation-container-heading{

    height: 3rem;
    padding: 0.5rem;
    background-color: white;
    border-radius: 50%;
}
.chat-Navigation-container-heading img{
    height: 100%;
    width: 100%;
}
.chat-Navigation-container-last{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    gap: 1rem;
}
.chat-Navigation-container-last p{
      border-radius: 50%;
    height: 3rem;
    width: 3rem;

    /* padding: 0.3rem 0rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 10ms ease-in-out;
    background-color: #7a7c7d;
    font-size: 1.5rem;
}
.chat-Navigation-container-last p img{
    height: 100%;
    width: 100%;
}
</style>