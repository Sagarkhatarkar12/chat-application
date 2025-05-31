<template>
<div class="user-message">
    <div class="user-message-Avtar">
<Avatar :src = "src"/>
    </div>
    <div class="user-message-text">
        <h3>Putra pratama</h3>
        <div v-if="typing" class="typing">
            <p>typing....</p>
        </div>
        <p v-else>dul as madang urung</p>
    </div>
    <div class="user-message-Stime">
        <p>12.30</p>
        <span class="user-message-Stime-countMessage">3</span>
    </div>
</div>
</template>
<script>
import Avatar from './Avatar.vue';
export default {
    components:{
Avatar
    },
    props:{
        src:{
type:String,
required:true
        }
        ,
        typing:{
            type:Boolean,
            required:true
        }
    }

}
</script>
<style lang="scss">
.user-message{
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
    height: 5rem;
    width: 100%;
    padding: 1rem 0.4rem;
    &:hover{
        background-color: #252c2e;

    }
    &-Avatar{

    }
    &-text{
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        h3{
            font-weight: 600;
            color:  #e0e0e0;
            font-size: 1.2rem;
            font-family: 'Poppins', sans-serif;
            line-height: 1.5;
            letter-spacing: 0.05em;
            text-transform: capitalize;
            margin: 0;
            padding: 0;
            transition: color 0.3s ease;
            cursor: pointer;
            &:hover{
                color: #48a5c3;
            }

        }
        p{
            font-size: 1rem;
            
            font-family: 'Poppins', sans-serif;
            line-height: 1.5;
            letter-spacing: 0.05em;
            margin: 0;
            padding: 0;
            cursor: pointer;
              font-weight: 600;
              color: gray;
                transition: all 0.3s ease-in-out;
                &:hover{
                  
                    color: #48a5c3;
                }

        }
    }
        &-Stime{
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            right: 0.8rem;
            top: 0.5rem;
            gap:0.5rem;
            p{
                font-size: 0.9rem;
                color: gray;
               
            }
            &-countMessage{
                background-color:#48a5c3;
                color: white;
                border-radius:50%;
                padding: 0.3rem 0.6rem;
                font-size: 0.8rem;
            
            }
    }
}
.typing{
    display: flex;
    align-items: center;
    gap: 0.3rem;
    p{
        font-size: 0.9rem;
        color: #48a5c3;
    }
    }
</style>