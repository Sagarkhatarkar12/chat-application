<template>
<div class="OnlineContainer-now">
  <h3>{{ title }}</h3>
  <p>More</p>
</div>
</template>
<script>
export default{
  components:{
    
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
 .OnlineContainer-now {
        display: flex;
        justify-content: space-between;
        padding: 0rem 0.9rem;

        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 1rem;
            color: gray;
        }

    }
</style>