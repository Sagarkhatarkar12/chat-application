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
  data(){
    return {
      SelectUser :{}

    }
  },
  methods:{
 handleId(data){
  console.log(data)

this.SelectUser = data;
   }
  }
}
</script>

<template>
  <div class="chat-app">
    <ChatNav />
    <!-- <h1>{{ idValue }}</h1> -->
     <h1>
      {{ SelectUser.userName }}
     </h1>
     <chat_message :id="SelectUser.id" :userName = "SelectUser.userName" :src ="SelectUser.src"/>
    
    <div class="second-part">

      <Router-View  @id =handleId />
    </div>

  
  

  <div class="chat-contact-detail">
    <!-- <ContactDetails /> -->
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
.second-part{
  width: 100%;
}
</style>
