<template>
  <client-only>

    <div :class="background">
      
      <div class="center">
        <h1 class="text">Save the date!</h1>
        <h3 class="text">16 de febrero de 2024</h3>
      </div>
      
      <div>
        <CounterDays/>
      </div>
      
    </div>
  </client-only>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { preloadImages } from '@/utils/preloadImages'
export default {
  name: 'IndexPage',
  components:{
    CounterDays: defineAsyncComponent(() => import('@/components/CounterDay.vue'))
  },
  data(){
    return{
      background: 'background-image2 flex',
      imagesLoaded: false,  
    }
  },
  methods:{
    randomBackground(){

      setInterval(()=> {
        let randomImage = Math.floor(Math.random() * 13);
        switch(randomImage){
          case 1: 
            return this.background = 'background-image2 flex fade-in-image'; 
          case 2: 
            return this.background =  'background-image3 flex fade-in-image'; 
          case 3: 
            return this.background =  'background-image4 flex fade-in-image'; 
          case 4: 
            return this.background = 'background-image5 flex fade-in-image'; 
          case 5: 
            return this.background = 'background-image7 flex fade-in-image'; 
          case 6: 
            return this.background = 'background-image9 flex fade-in-image'; 
          case 7: 
            return this.background = 'background-image10 flex fade-in-image'; 
          case 8: 
            return this.background = 'background-image11 flex fade-in-image'; 
          case 9: 
            return this.background = 'background-image12 flex fade-in-image'; 
          case 10: 
            return this.background = 'background-image13 flex fade-in-image'; 
          case 11: 
            return this.background = 'background-image14 flex fade-in-image'; 
          case 12: 
            return this.background = 'background-image15 flex fade-in-image'; 
          default:
            return this.background = 'background-image2 flex fade-in-image'; 
        }

      }, 5000);
    }
  },
  preload(){
    const images = [
        '@/static/images/marr.jpg',
        '@/static/images/picture2.jpeg',
        '@/static/images/picture3.jpeg',
        '@/static/images/picture4.jpeg',
        '@/static/images/picture5.jpeg',
        '@/static/images/picture7.jpeg',
        '@/static/images/picture9.jpeg',
        '@/static/images/picture10.jpeg',
        '@/static/images/picture11.jpeg',
        '@/static/images/picture12.jpeg',
        '@/static/images/picture13.jpeg',
        '@/static/images/picture14.jpeg',
        '@/static/images/picture15.jpeg',
      ]

      images.forEach((image) => {
      const img = new Image()
      img.src = image
    })
      // preloadImages(images)
  },
    mounted(){
      this.imagesLoaded = true
    this.randomBackground()
  },
}
</script>

<style scoped>

@font-face {
    font-family: "Pacific";
    src: local("Pacific"),
     url('@/assets/pacific/Pacifico-Regular.ttf') format("truetype");
}

html {
    font-family: "Pacific";
}
  .background-image{
      background-image: url('~/static/images/marr.jpg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  } 
  
  .background-image2{
      background-image: url('~/static/images/picture2.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  } 
  .background-image3{
      background-image: url('~/static/images/picture3.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  } 
  .background-image4{
      background-image: url('~/static/images/picture4.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }

  .background-image5{
      background-image: url('~/static/images/picture5.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  } 

  .background-image7{
      background-image: url('~/static/images/picture7.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }

  .background-image9{
      background-image: url('~/static/images/picture9.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  } 
  .background-image10{
      background-image: url('~/static/images/picture10.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  } 
  .background-image11{
      background-image: url('~/static/images/picture11.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  } 
  .background-image12{
      background-image: url('~/static/images/picture12.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  } 
  .background-image13{
      background-image: url('~/static/images/picture13.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  } 
  
  .background-image14{
      background-image: url('~/static/images/picture14.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  } 
  .background-image15{
      background-image: url('~/static/images/picture15.jpeg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  } 
  .fade-in-image { animation: fadeIn 1s; }

  @keyframes fadeIn {
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
  .flex{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
.center{
  display: flex;
    flex-direction: column;
    align-items: center;
}
  .text{
    color: rgb(247, 231, 195);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: black 0.1em 0.1em 0.2em;
  }
</style>
