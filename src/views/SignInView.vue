<template>
  <div :style="{backgroundImage:`url(${Background})`}" class="signInBackground">
    <div class="inputContainer">
      <label>
        Podaj swój login
      </label>
      <custom-input @handle-change="handleChange" />
      <div class="buttonContainer">
        <custom-button @handle-click="handleClick" label="Dalej"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Background from '../assets/signInBackground.png'
import CustomInput from '../components/CustomInput.vue'
import CustomButton from '../components/CustomButton.vue'

function handleChange(e) {
  console.log(e.target.value)
}
function handleClick() {
  console.log('button clicked')
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
    margin-bottom: 7em;
  }
  .inputContainer label{
    font-size: 25px;
    font-weight: bold;
  }
  .buttonContainer {
    margin-top: 3em;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
</style>