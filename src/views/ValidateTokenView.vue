<template>
  <div :style="{backgroundImage:`url(${Background})`}" class="signInBackground">
  <div v-if="showSpinner">
    <loading-spinner />
  </div>
  </div>
</template>

<script>
import Background from '../assets/signInBackground.png'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { ref } from 'vue'
const showSpinner = ref(true)

export default {
  components: {
    LoadingSpinner
  },
  methods: {
  },
  data: function () {
    return {
        Background: Background,
        showSpinner: showSpinner
    }
  },
  mounted() {
    console.log(this.$route.params)
    // perform request
    showSpinner.value = false
  }
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

</style>