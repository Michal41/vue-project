<template>
  <div class="previewSection container-fluid">
    <div class="imagesContainer row">
      <trip-preview-image :img="LondonPreview" label="LONDYN" class="col-md-4 "/>
      <trip-preview-image :img="RomaPreview" label="ROME" class="col-md-4" />
      <trip-preview-image :img="OmanPreview" label="OMAN" class="col-md-4" />
    </div>
  </div>
  <div class="listSectionContainer container-fluid">
    <div class="listSection row">
      <h3 class="addTripTitle">
        Dodaj podróz
      </h3>
      </div>

        <div class="row">

          <div class="col-md-4"><span>Miejsce</span></div>
          <div class="col-md-4"><span>Dzien rozpoczecia</span></div>
          <div class="col-md-4"><span>Dzien zakonczenia</span></div>

        </div>

        <div class="row" v-for="({ place, id, dateStart, dateEnd }) in trips" v-bind:key="id">
          <div class="col-md-4"><span>Miejsce</span><span>{{place}}</span></div>
          <div class="col-md-4"><span>Dzien rozpoczecia</span><span>{{dateStart}}</span></div>
          <div class="col-md-4"><span>Dzien zakonczenia</span><span>{{dateEnd}}</span></div>
      </div>

      <div class="buttonContainer">
        <custom-button label="Dodaj" @handle-click="openModal" />
      </div>
        <custom-modal :show-modal="modalOpen" @close-modal="closeModal">
          <add-trip-form @refresh-trips="refreshTrips" />
        </custom-modal>
    </div>



</template>

<script>
import RomaPreview from '../assets/romaPreview.png'
import LondonPreview from '../assets/londonPreview.png'
import OmanPreview from '../assets/omanPreview.png'
import TripPreviewImage from '@/components/TripPreviewImage.vue'
import CustomButton from '@/components/CustomButton.vue'
import CustomModal from '@/components/CustomModal.vue'
import AddTripForm from '@/components/AddTripForm.vue'

import { ref } from 'vue'
const trips = ref([])
const modalOpen = ref(false)

async function fetchTrips() {
  const response = await fetch(`http://localhost:8080/trips`)
  const body = await response.json()
  trips.value = body
}

export default {
  components: {
    TripPreviewImage,
    CustomButton,
    CustomModal,
    AddTripForm,
},
  methods: {
    closeModal: function() {
      modalOpen.value = false;
    },
    openModal: function() {
      modalOpen.value = true;
    },
    refreshTrips: function() {
      modalOpen.value = false;
      fetchTrips()
    },
  },
  data: function () {
    return {
        RomaPreview: RomaPreview,
        LondonPreview: LondonPreview,
        OmanPreview: OmanPreview,
        trips: trips,
        modalOpen: modalOpen,
    }
  },
  async mounted() {
    fetchTrips()
  }
}

</script>

<style scoped>
  .previewSection {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(#E1DDFE 0%,#FEC8FC 30%, #FFEDE4 100%);
  }
  .listSectionContainer {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(#FFEDE4 0%,#FEC8FC 30%, #E1DDFE 100%);
  }
  .imagesContainer {
    width: 100%;
    justify-items: center;
    align-items: center;
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

  div span {
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
    padding-bottom: 3em;
    margin-top: 10px;
  }
</style>