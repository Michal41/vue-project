<template>
  <div class="previewSection">
    <div class="imagesContainer">
      <trip-preview-image :img="LondonPreview" label="LONDYN"/>
      <trip-preview-image :img="RomaPreview" label="ROME" />
      <trip-preview-image :img="OmanPreview" label="OMAN" />
    </div>
  </div>
  <div class="listSection">
    12
  </div>
</template>

<script>
import RomaPreview from '../assets/romaPreview.png'
import LondonPreview from '../assets/londonPreview.png'
import OmanPreview from '../assets/omanPreview.png'
import TripPreviewImage from '@/components/TripPreviewImage.vue'

import { ref } from 'vue'
const showSpinner = ref(true)
const userName = ref('')

export default {
  components: {
    TripPreviewImage,
},
  methods: {
    handleButtonClick: function() {
      const {userId} = this.$route.params
      this.$router.push(`/${userId}/trips`)
    }
  },
  data: function () {
    return {
        showSpinner: showSpinner,
        RomaPreview: RomaPreview,
        LondonPreview: LondonPreview,
        OmanPreview: OmanPreview,
        userName: userName,
    }
  },
  async mounted() {
    const {userId} = this.$route.params
    const response = await fetch(`http://localhost:8080/user/${userId}`)
    const { name } = await response.json()
    showSpinner.value = false
    userName.value = name
  }
}

</script>

<style scoped>
  .previewSection {
    width: 100%;
    height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(#E1DDFE 0%,#FEC8FC 30%, #FFEDE4 100%);
    display: flex;
    justify-content: space-between;
  }
  .listSection {
    width: 100%;
    height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(#FFEDE4 0%,#FEC8FC 30%, #E1DDFE 100%);
  }
  .imagesContainer {
    margin: auto;
    width: 100%;
    padding: 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
  }

</style>