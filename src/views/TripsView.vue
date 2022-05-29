<template>
  <div class="previewSection">
    <div class="imagesContainer">
      <trip-preview-image :img="LondonPreview" label="LONDYN"/>
      <trip-preview-image :img="RomaPreview" label="ROME" />
      <trip-preview-image :img="OmanPreview" label="OMAN" />
    </div>
  </div>
  <div class="listSectionContainer">
    <div class="listSection">
      <h3 class="addTripTitle">
        Dodaj podróz
      </h3>
      <table class="tripsTable">
        <tr>
          <th><span>Miejsce</span></th>
          <th><span>Dzień rozpoczęcia</span></th>
          <th><span>Dzień zakończenia</span></th>
        </tr>
        <tr>
          <td><span>Oman</span></td>
          <td><span>2020-02-02</span></td>
          <td><span>2022-01-03</span></td>
        </tr>
      </table>
      <div class="buttonContainer">
        <custom-button label="Dodaj" />
      </div>
    </div>
  </div>
</template>

<script>
import RomaPreview from '../assets/romaPreview.png'
import LondonPreview from '../assets/londonPreview.png'
import OmanPreview from '../assets/omanPreview.png'
import TripPreviewImage from '@/components/TripPreviewImage.vue'
import CustomButton from '@/components/CustomButton.vue'

import { ref } from 'vue'
const showSpinner = ref(true)
const userName = ref('')

export default {
  components: {
    TripPreviewImage,
    CustomButton,
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
  .listSectionContainer {
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
  .addTripTitle {
    margin: 0px;
    font-weight: normal;
    color: #707070;
    padding-top: 1em;

  }
  .listSection {
    max-width: 1200px;
    margin: auto;
  }
  .tripsTable {
    margin-top: 2em;
    width: 100%;
    text-align: left;
    color: #707070;
    border-collapse: separate;
    border-spacing: 1em;
  }

  .tripsTable th span {
    border-bottom: 8px solid #707070;
    display: block;
    margin-right: 1em;
    padding: 10px;
    font-weight: normal;
  }
  .tripsTable td {
    width: 33%;
  }
  .tripsTable tr {
    margin-top: 2em;
  }
  .tripsTable td span{
    margin-right: 1em;
    background-color: #E4CEF9;
    border-radius: 10px;
    padding: 20px;
    display: block;
  }
  .buttonContainer {
    display: flex;
    justify-content: flex-end;
    margin-right: 2em;
  }
</style>