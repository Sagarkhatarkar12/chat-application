<template>
    <div class="Contact-details">
        <div class="Contact-details-header">
            <p>Contact details</p>
            <NavIcon :icon="'ri-close-fill'" />
        </div>

        <div class="Contact-details-profile">
            <Profile :userName ="
                'Sagarkhatarkar'" online="true" />
        </div>
        <div class="Contact-details-heading">
            <Heading title="Media" />

        </div>
        <div class="Contact-details-pictoreContainer">
<pic/>
        </div>

        <Heading title="Files" />         

        <div class="Contact-details-fileContainer">
            <div class="Contact-details-fileContainer-list">
               <MessageLayout :file = true />
               <MessageLayout :file = true />
               <MessageLayout :file = true />
               <MessageLayout :file = true />
            </div>
        </div>

    </div>
</template>
<script>
import NavIcon from './NavIcon.vue';

import Profile from './Profile.vue';
import Heading from './Heading.vue';
import pic from './PictoreShow.vue';
import MessageLayout from './MessageLayout.vue';

export default {
    name: 'ContactDetails',
    components: {
        NavIcon,
        Profile,
        Heading,
        pic,
        MessageLayout,

    },
    data() {
        return {
            // You can add any local state here if needed
        };
    },
    methods: {
        // Add any methods if needed
    }
}

</script>
<style lang="scss" scoped>
.Contact-details {
    height: 100%;
    width: 20rem;
    background-color: #0a0e0f;
    overflow-y: auto;

    &-header {
        height: 4.73rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0rem 1rem;
        align-items: center;
        border-bottom: 1px solid #2c3031;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
    }
&-fileContainer{
    width: 100%;
    height: 100%;

    padding: 1rem;
    &-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: center;
        gap: 0.5rem;

    }
}
}
</style>