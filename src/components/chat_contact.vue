
<template>
      <div class="chat-container">
        <div class="chat-container-contact">
            <div class="chat-container-contact-item">
                <Avatar :src="'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740'" />
                <div class="chat-container-contact-item-name">
                    <h3>Sagar khatarkar</h3>
                    <p>my account</p>
                    </div>
            </div>
            <div class="chat-container-contact-drop-down">
                <p><i class="ri-more-2-fill"></i></p>
            </div>
        </div>
      </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default{
    components:{
        Avatar
    }
}
</script>
<style lang="scss">
.chat-container{
    width: 20rem;
    height: 100%;
    display: flex;
    justify-content: center;
    // align-items: center;
    color: white;
    background-color: #161b1c;
    &-contact{
        width: 100%;
        padding: 1rem 1rem;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid #202427;
     &-item{
        width: 100%;
        height: 100%;
        display: flex;
        // justify-content: center;
        align-items: center;
        gap: 0.9rem;
        // padding: 0.5rem;
        
     }
     &-item-name{
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        gap: 0.2rem;
        h3{
            font-size: 1.2rem;
            font-weight: 600;

        }
        p{
            font-size: 0.9rem;
            color: #737879;
        }
     }
        &-drop-down{
            // width: 2.5rem;
            height: 100%;
       
       
            p{
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
                &:hover{
                    background-color: #47a6c3;
                    border: none;
                }
            }
        }
        
    }
}
</style>