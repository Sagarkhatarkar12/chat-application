<template>
<div class="chat-item" :class="{ 'sent': sender, 'received': !sender }">
  <div class="chat-item-Message">
    <p>Hello,Nizar All
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At qui distinctio dolor, repellendus quae rem magni molestias ea neque autem velit eum necessitatibus voluptatem praesentium beatae quis quidem adipisci natus?
    </p>
  </div>

</div>
</template>
<script>
export default{
    name: 'ChatItem',
    props: {
        message: {
            type: String,
            required: true
        },
        sender:{
            type:Boolean,
            required:true
        },
       
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

<style lang="scss">
.sent {
  justify-content: flex-end;
  color: black;
  .chat-item-Message{
    background-color:#47a6c2;
    font-size: 1.2rem;
    width: fit-content;
    font-weight: bold;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    padding: 0.5rem 1rem;
    ;
    max-width: 50%;
    padding: 1rem;
    cursor: pointer;
 
  }
}
.received {
  justify-content: flex-start;
  background-color: #252c2e;
    color: #fff;
    .chat-item-Message{
      font-size: 1.2rem;
    width: fit-content;
    font-weight: bold;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    padding: 0.5rem 1rem;
    ;
    max-width: 50%;
    padding: 1rem;
    cursor: pointer;
    background-color: #252c2e;
    }
}
.chat-item {
  width: 100%;
  height: 100%;
  display: flex;
//   background-color: #252c2e;
 
  align-items: center;
  padding: 0.5rem 1rem;
 
  
  &-Message {
    font-size: 1.2rem;
    width: fit-content;
    font-weight: bold;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    padding: 0.5rem 1rem;
    ;
    max-width: 50%;
    padding: 1rem;
    cursor: pointer;
  }
}
</style>