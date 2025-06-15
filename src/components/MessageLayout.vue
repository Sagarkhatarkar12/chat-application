<template>
    <div  @click="HandleId(id,userName, src)" v-if="message" :class="chatBigHeader != true ? 'user-message' : 'user-header-message'">
        <div class="user-message-Avtar" >
            <Avatar :src="src" />
        </div>
        <div class="user-message-text">
            <!-- <h1 style="color:white">{{ userName }}</h1> -->
            <h3 style="color:white">{{ userName }} </h3>
            <div v-if="typing" class="typing">
                <p>typing....</p>
            </div>
            <p v-else>hii sjshfwef iwefje</p>

        </div>
        <div class="user-message-Stime">
       
            <p v-if="chatBigHeader != true">12.30</p>
            <span v-if="unRead && chatBigHeader != true" class="user-message-Stime-countMessage">{{ unRead }}</span>
            <span v-if="sent && chatBigHeader != true"><i class="ri-check-line"></i></span>
            <span v-else-if="delivered && chatBigHeader != true"><i class="ri-check-double-line"></i></span>
            <span v-else-if="seen && chatBigHeader != true" class="seen"><i class="ri-check-double-line"></i></span>

            <!-- <span v-if="dumy" class="user-message-Stime-countMessage">{{ 2}}</span> -->
        </div>
    </div>
    <!-- {{ console.log(file) }} -->

    <div v-if="file" class="file">
        
        <div class="file-name">
            <div class="file-name-icon">
                <i class="ri-file-2-fill"></i>
            </div>
            <p>file_name.pdf</p>
        </div>
        <div class="file-detail">
            <p>DOCS</p>
            <p>32kb</p>
        </div>
    </div>
</template>
<script>
import Avatar from './Avatar.vue';
export default {
    components: {
        Avatar
    },
    data() {
        return {


        }
    },
    props: {
        id:{
            type:Number,
            required:true
        },
        sent: {
            type: Boolean,
            required: false
        },
        delivered: {
            type: Boolean,
            required: false
        },
        seen: {
            type: Boolean,
            required: false
        },
        userName: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        unRead: {

            type: [Number, String],
            required: true
        }
        ,
        typing: {
            type: Boolean,
            required: true
        },
        chatBigHeader: {
            type: Boolean,
            required: false,

        },
        type:{
            type: String,
            default: 'message'
        }
        ,
        file: {
            type: Boolean,
            default: false
        }
        ,
        message:{
            type:Boolean,
            default: false
        }
    }
    ,
    methods:{
        HandleId(id,userName, src){
            // console.log(id)
            const MessageView = {
                "id":id,
                "userName":userName,
                "src" :src
            }
            this.$emit("id", MessageView)
        }
    }
    

}
</script>
<style lang="scss">
.user-header-message {
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
    height: 5rem;
    width: 100%;
    padding: 1rem 0.4rem;
    cursor: pointer;
}
.user-message-text h3{
    color: white !important;
}
.user-message {
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
    height: 5rem;
    width: 100%;
    padding: 1rem 0.4rem;
    cursor: pointer;

    &:hover {
        background-color: #252c2e;
    }

    &-Avatar {}

    &-text {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        h3 {
            font-weight: 600;
            color: #e0e0e0;
            font-size: 1.2rem;
            font-family: 'Poppins', sans-serif;
            line-height: 1.5;
            letter-spacing: 0.05em;
            text-transform: capitalize;
            margin: 0;
            padding: 0;
            transition: color 0.3s ease;
            cursor: pointer;

            &:hover {
                color: #48a5c3;
            }

        }

        p {
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

            &:hover {

                color: #48a5c3;
            }

        }
    }

    &-Stime {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        right: 0.8rem;
        top: 0.5rem;
        gap: 0.5rem;

        p {
            font-size: 0.9rem;
            color: gray;

        }

        &-countMessage {
            background-color: #48a5c3;
            color: white;
            border-radius: 50%;
            padding: 0.3rem 0.6rem;
            font-size: 0.8rem;

        }
    }
}

.typing {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    p {
        font-size: 0.9rem;
        color: #48a5c3;
    }
}

.seen {
    color: #48a5c3;
    font-size: 1.2rem;
}
.file{
    height: 5rem;;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
    height: fit-content;
    cursor: pointer;
    scroll-behavior: smooth;
    &:hover{
        background-color: #2c3031;
    }
    background-color: #252c2e;
    &-name{
        display: flex;;
        align-items: center;
        gap: 0.5rem;
        background-color: #1f2628;
        padding: 0.3rem 0.5rem;
        border-radius: 0.5rem;
        &-icon{
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            // background-color: #48a5c3;
            border-radius: 50%;
            color: #48a5c3;
            font-size: 1.5rem;
        }
        p{
            color: #e0e0e0;
            font-size: 1rem;
        }

    }
    &-detail{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            color: #737879;
            font-size: 0.9rem;
        }
    }
}
</style>