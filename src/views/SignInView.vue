<template>
  <div :style="{backgroundImage:`url(${Background})`}" class="signInBackground">
  <div></div>
  </div>
</template>

<script setup>
import Background from '../assets/signInBackground.png'
</script>

<style scoped>
  .signInBackground{
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>