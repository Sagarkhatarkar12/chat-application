<template>
    <div class="message">
        <div class="message-aticon">
            <i class="ri-attachment-line"></i>
        </div>

        <div class="message-input">
            <textarea placeholder="Type your message here..."></textarea>
            <button type="btn">
                <i class="ri-emoji-sticker-fill"></i>
            </button>
        </div>
        <div class="message-mic-icon">
            <i class="ri-mic-ai-line"></i>
        </div>

    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.message {

    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #161b1c;
    cursor: pointer;


    &-aticon {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: white;
        font-size: 1.7rem;
        cursor: pointer;
        margin-right: 1rem;

        &:hover {
            background-color: #202427;
            cursor: pointer;
        }

    }

    &-input {
        width: 80%;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #202427;
        overflow: hidden;
        border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;

        textarea {
            border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
            width: 100%;
            background-color: #202427;
            height: 100%;
            color: white;
            border: none;
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
            outline: none;
            font-family: poppins, sans-serif;
            resize: none;
        }

        button {
            background-color: #2b3031;
            border: none;
            border-radius: 50%;
            margin-right: 0.5rem;
            cursor: pointer;
            padding: 0.5rem;
            font-size: large;
            &:hover{
                font-size: 1.3rem;
            }

            i {
                color: #d4d5d5;



            }
        }

    }

    &-mic-icon {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: white;
        font-size: 1.7rem;
        margin-left: 1rem;
        cursor: pointer;
        &:hover {
            background-color: #202427;
            cursor: pointer;
        }   

    }

}
</style>