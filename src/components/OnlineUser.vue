<template>
    <div class="OnlineContainer">


        <div class="OnlineContainer-Online-Avatar">
            <span class="dot"></span>
            <Avatar :src="src" />
            <p>{{ userName }}</p>
            
        </div>
    </div>

</template>
<script>
// import Avatar from './Avatar.vue';

import Avatar from './Avatar.vue';

export default {
    components: {
        Avatar
    },
    props: {
        src: {
            type: String,
            required: true
        }
        ,
        userName: {
            type: String,
            required: true
        }

    }
}

</script>
<style lang="scss">
.OnlineContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    gap: 1rem;
    &-Online-Avatar {
        display: flex;
        flex-direction: column;
        position: relative;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        // height: 100%;
        height: fit-content;

        .dot {
            background-color: green;
            position: absolute;
            padding: 0;
            top: 0.5rem;
            left: 2.2rem;
            padding: 0.3rem;
            outline: 2px solid #161b1c;
            border-radius: 50%;
        }
    }

}


</style>