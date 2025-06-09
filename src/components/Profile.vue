<template>
    <div class="profile">
        <div class="profile-img">
            <img src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740" alt="">
        </div>
        <div class="profile-details">
            <h2 class="profile-details-name">{{ userName }}</h2>
             <p v-if="online">Online</p>


    </div>
    </div>

</template>
<script>
export default{

    
    props:{
        userName: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        online:{
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss">
.profile {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 20px;
   
    border-radius: 10px;
    &-img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            // border-radius: 50%;
        }

    }
    
    &-details {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        &-name{
            font-size: 1.5rem;;
            font-weight: bold;
            color: #fff;
        }
        p {
            color: #00ff00;
            font-size: 1.2rem;
            font-weight: 500;
        }
    }
}
</style>