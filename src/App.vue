<script>
import ChatNav from "../src/components/ChatNavigation.vue"
export default {
  components: {
    ChatNav
  },
}
</script>

<template>
  <div class="chat-app">
    <ChatNav />
    <div class="chat-contact-container-card"></div>
    <div class="chat-message-display"></div>
    <div class="chat-contact-detail"></div>
  </div>

</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.chat-app {
  display: flex;
  height: 100vh;
  width: 100vw;
}

</style>
