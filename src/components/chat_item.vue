<template>
  <div class="chat-item" :class="{ 'sent': sender, 'received': !sender }">
    <div class="chat-item-Message">
      <p>{{ message }}
      </p>
<div class="time">
 <p  v-if="sent"> <i class="ri-check-line"></i></p>
  <p v-if="delivered"> <i class="ri-check-double-line"></i></p>
  <p v-if="read" class="read"><i class="ri-check-double-line"></i></p>
  
   <p>12:00</p>
 </div>
    </div>
 

  </div>
</template>
<script>
export default {
  name: 'ChatItem',
  props: {
    message: {
      type: String,
      required: true
    },
    sender: {
      type: Boolean,
      required: true
    },
    time: {
      type: String,
      default: '12:00'
    },
    delivered: {
      type: Boolean,
      default: false
    },
    sent: {
      type: Boolean,
      default: false
    },
    read: {
      type: Boolean,
      default: false
    }


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
  display: flex;
  justify-content: flex-end;
  color: black;

  .chat-item-Message {
    background-color: #47a6c2;
    font-size: 0.9rem;
    width: fit-content;
    font-weight: bold;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    padding: 0.5rem 1.4rem;
    max-width: 50%;
    padding: 1rem;
    cursor: pointer;
  }
}

.received {
  display: flex;
 

  justify-content: flex-start;

  color: #fff;

  .chat-item-Message {
    background-color: #252c2e;
  font-size: 0.9rem;
    width: fit-content;
    font-weight: bold;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    padding: 0.4rem 1.4rem;
    cursor: pointer;
    background-color: #252c2e;
  }
}

.chat-item {
  position: relative;
  width: 100%;
  min-height: fit-content;
  display: flex;
  //   background-color: #252c2e;

  align-items: center;
  padding: 0.5rem 2rem;


  &-Message {
    font-size: 1.2rem;
    width: fit-content;
    font-weight: bold;
    position: relative;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    padding: 0.5rem 1rem;

    max-width: 50%;
    padding: 1rem;
    cursor: pointer;
  }
}
.time{
  position: absolute;
  color: white;
  display: flex;
  right: 0.4rem;
  bottom: -1.4rem;
  gap: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
 p i{
    font-size: 1.2rem;
    // color: #47a6c2;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 0.6rem;
 }
  .read {
    color: #47a6c2;
  }
}
</style>