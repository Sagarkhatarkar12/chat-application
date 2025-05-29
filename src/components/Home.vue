<script>
// import ChatNav from "../src/components/ChatNavigation.vue"
import ChatNav from "./ChatNavigation.vue"
import chat_contact from "./chat_contact.vue";
export default {
  components: {
    ChatNav,
    chat_contact
  },
}
</script>

<template>
  <div class="chat-app">
    <ChatNav />
  <chat_contact/>
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
