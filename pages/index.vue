<template>
  <div class="background-image flex">
    
    <div>
      <h1>Save the date!</h1>
      <h3>16 de febrero de 2024</h3>
    </div>

    <div>
      <CounterDays/>
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'IndexPage',
  components:{
    CounterDays: defineAsyncComponent(() => import('@/components/CounterDay.vue'))
  }
}
</script>

<style scoped>
  .background-image{
      background-image: url('@/assets/images/marr.jpg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }  
  .flex{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
</style>
