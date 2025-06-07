<template>
    <div class="NavIcon">
        <p>
            <i :class="icon"></i>
        </p>

    </div>
</template>
<script>
export default {
    name: "NavIcon",
    props: {
        icon: {
            type: String,
            required: true
        },
        
    },
    data() {
        return {

        }
    }

}
</script>
<style lang="scss" scoped>
.NavIcon {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: 1px solid #393c3d;
   

    &:hover {
        background-color: #2c3031;
    }

    p {
        font-size: 1.5rem;
        color: #fff;
        margin: 0;
        
    }
}
</style>