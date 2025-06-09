<template>
    <div class="Pictore-container">
        <div class="img">
            <img src="https://placehold.co/400" alt="">
        </div>
        <div class="img">
            <img src="https://placehold.co/400" alt="">
        </div>
        <div class="img">
            <img src="https://placehold.co/400" alt="">
        </div>
        <div class="img">
            <img src="https://placehold.co/400" alt="">
        </div>
      
    </div>

</template>
<script>
</script>
<style lang="scss" scoped>
.Pictore-container{
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    .img {
        width: 120px;
        height: 120px;
        overflow: hidden;
        border-radius: 10px;
        &:hover{
            transform: scale(1.05);
            transition: transform 0.3s ease;
            cursor: pointer;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>