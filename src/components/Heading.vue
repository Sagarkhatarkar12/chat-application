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
        height: 4rem;
        width: 100%;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 0.5rem 1rem;
        border: 2px solid #202427;
        font-family: Arial, sans-serif;
        font-weight: 500;
        cursor: pointer;
        transition: color 0.3s ease;
        &:hover {

            background-color: #e0e0e0;
            color:#202427;
        }


        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 1rem;
            color: gray;
        }

    }
</style>