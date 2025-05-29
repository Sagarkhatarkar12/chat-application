<template>
<div class="Avatar">
    <img :src="src" alt="Avatar Image">
</div>
</template>
<script>
export default{
    name:"Avatar",
    props:{
        src:{
            type:String,
            required:true,

        }
    }
}
</script>
<style lang="scss">
.Avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>