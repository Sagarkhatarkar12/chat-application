<script>
import home from "./components/Home.vue"
import chatNav from "./components/ChatNavigation.vue"
import { useChatStore } from "./stores/chatMange";
export default {
  setup(){
    
  //   const chatMange= useChatStore();
//   chatMange.ContactList.forEach((ele, index) => {
//   // console.log(index); // You can log more details if needed
// });
 const chatManage  = useChatStore();
 console.log(chatManage)
 return {chatManage}
  },
  
  components: {
    home
  },
}
</script>

<template>
  <!-- <h1>{{ typeof(Array.from(chatManage.contactMessageDetails) )}}</h1> -->

<home/>

</template>

<style scoped>


</style>
