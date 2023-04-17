<template>
    <h1>test</h1>
  </template>
  
  <script>
  export default {
   methods: {
    async login(event){
        event.preventDefault()

    }
   },

   middleware: 'auth'

  }
  </script>
  
  <style scoped>
  
  </style>
  