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
        /* padding: 0rem 0.9rem; */
        height: 4rem;
        width: 100%;
        align-items: center;
        background-color: #f0f0f0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 0.5rem 1rem;
        color: #333;
        font-family: Arial, sans-serif;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;
        &:hover {
            background-color: #e0e0e0;
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