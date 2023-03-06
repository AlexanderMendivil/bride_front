<template>
    <div class="container">

        <div class="subcontainer">
            <p>{{ days }}</p>
            <p>Días</p>

        </div>

        <div class="subcontainer">
            <p>{{ hours }}</p>
            <p>Horas</p>

        </div>

        <div class="subcontainer">
            <p>{{ minutes }}</p>
            <p>Minutos</p>

        </div>

        <div class="subcontainer">
            <p>{{ seconds }}</p>
            <p>Segundos</p>

        </div>
    </div>    
</template>

<script lang="ts">
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
</style>