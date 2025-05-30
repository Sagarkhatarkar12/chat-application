<template>
<div class="user-message">
    <div class="user-message-Avtar">
<Avatar :src = "src"/>
    </div>
    <div class="user-message-text">
        <h3>Putra pratama</h3>
        <p>dul as madang urung</p>
    </div>
    <div class="user-message-Stime">
        <p>12.30</p>
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
    }

}
</script>
<style lang="scss">
.user-message{
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
            font-size: 1.4rem;
        }
        p{
            font-size: 1rem;
            color: gray;
        }
    }
}
</style>