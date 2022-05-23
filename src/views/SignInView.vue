<template>
  <div :style="{backgroundImage:`url(${Background})`}" class="signInBackground">
    <div class="inputContainer">
      <label>
        Podaj swój login
      </label>
      <custom-input @handle-change="handleChange"></custom-input>
    </div>
  </div>
</template>

<script setup>
import Background from '../assets/signInBackground.png'
import CustomInput from '../components/CustomInput.vue'

function handleChange(e) {
  console.log(e.target.value)
}
</script>

<style scoped>
  .signInBackground{
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .inputContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inputContainer label{
    font-size: 25px;
    font-weight: bold;
  }
</style>