<script>
// import ChatNav from "../src/components/ChatNavigation.vue"
import ChatNav from "./ChatNavigation.vue"
import chat_contact from "./chat_contact.vue";
import chat_message from "./chat_message.vue";
import Online from "./OnlineUser.vue"
import ContactDetails from "./ContactDetails.vue";

export default {
  components: {
    ChatNav,
    chat_contact,
    chat_message,
    Online,
    ContactDetails,
  },
}
</script>

<template>
  <div class="chat-app">
    <ChatNav />
  <chat_contact/>
  <chat_message/>

  
  

  <div class="chat-contact-detail">
    <ContactDetails />
  </div>
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
