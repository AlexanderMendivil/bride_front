<template>
    <div class="container">

        <div class="subcontainer">
            <p class="text">{{ days }}</p>
            <p class="text">Días</p>

        </div>

        <div class="subcontainer">
            <p class="text">{{ hours }}</p>
            <p class="text">Horas</p>

        </div>

        <div class="subcontainer">
            <p class="text">{{ minutes }}</p>
            <p class="text">Minutos</p>

        </div>

        <div class="subcontainer">
            <p class="text">{{ seconds }}</p>
            <p class="text">Segundos</p>

        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    },

    methods:{

        countDays(){
            const second = 1000
            const minute = second * 60
            const hour = minute * 60
            const day = hour * 24
            const countDate = new Date('Feb 16, 2024 00:00:00').getTime()
            let gap
            let now
            const cb  = () => {
                now = new Date().getTime()
                gap = countDate - now
                this.days = Math.floor( gap / day )
                this.hours = Math.floor( (gap % day) / hour )
                this.minutes = Math.floor( (gap % hour) / minute )
                this.seconds = Math.floor( (gap % minute) / second )  
            }

            setInterval(cb, 1000)

        },
    },
    mounted(){
        this.countDays()
    }
}
</script>

<style scoped>
    .container{
        display: flex;
        align-items: center;
    }

    p{
        font-size: 1.4em;
    }
    .subcontainer{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-content: center;
        align-items: center;
        margin: 0.5em;
    }
    .text{
    color: rgb(247, 231, 195);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>