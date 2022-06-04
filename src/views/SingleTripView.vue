<template>
  <div class="arrangementsContainer">
    <div class="arrangements">
      <div class="col">
        <custom-button label="Dodaj to do" @handle-click="toDoOpenModal" />
        <div class="cell" v-for="({id, note}) in toDo" v-bind:key="id">{{note}}</div>
      </div>
      <div class="col">
        <custom-button label="Dodaj co zabrać" @handle-click="toTakeOpenModal" />
        <div class="cell" v-for="({id, note}) in toTake" v-bind:key="id">{{note}}</div>
      </div>
      <custom-modal :show-modal="toDoModalOpen" @close-modal="toDoCloseModal" title="Dodaj to do">
        <add-arrangement-form @refresh-arrangements="refreshArrangements" type="toDo" :tripId="tripId" />
      </custom-modal>
      <custom-modal :show-modal="toTakeModalOpen" @close-modal="toTakeCloseModal" title="Dodaj co zabrać">
        <add-arrangement-form @refresh-arrangements="refreshArrangements" type="toTake" :tripId="tripId" />
      </custom-modal>
    </div>
  </div>
</template>

<script>
import RomaPreview from '../assets/romaPreview.png'
import LondonPreview from '../assets/londonPreview.png'
import OmanPreview from '../assets/omanPreview.png'
import CustomButton from '@/components/CustomButton.vue'
import CustomModal from '@/components/CustomModal.vue'
import AddArrangementForm from '@/components/AddArrangementForm.vue'

import { ref } from 'vue'
const toDo = ref([]);
const toTake = ref([]);
const toDoModalOpen = ref(false)
const toTakeModalOpen = ref(false)

async function fetchArrangements(id) {
  const toTakeresponse = await fetch(`http://localhost:8080/arrangements/1/${id}`)
  const toTakeBody = await toTakeresponse.json()
  const toDoresponse = await fetch(`http://localhost:8080/arrangements/2/${id}`)
  const toDoBody = await toDoresponse.json()
  toDo.value = toDoBody
  toTake.value = toTakeBody
}

export default {
  components: {
    CustomButton,
    CustomModal,
    AddArrangementForm,
},
  methods: {
    toDoCloseModal: function() {
      toDoModalOpen.value = false;
    },
    toTakeCloseModal: function() {
      toTakeModalOpen.value = false;
    },
    toDoOpenModal: function() {
      toDoModalOpen.value = true;
    },
    toTakeOpenModal: function() {
      toTakeModalOpen.value = true;
    },
    refreshArrangements: function() {
      toDoModalOpen.value = false;
      toTakeModalOpen.value = false;
      const { id } = this.$route.params
      fetchArrangements(id)
    },
  },
  data: function () {
    return {
        RomaPreview: RomaPreview,
        LondonPreview: LondonPreview,
        OmanPreview: OmanPreview,
        toDo,
        toTake,
        toDoModalOpen,
        toTakeModalOpen,
        tripId: this.$route.params.id,
    }
  },
  async mounted() {
    const { id } = this.$route.params
    fetchArrangements(id)
  }
}

</script>

<style scoped>
  .arrangementsContainer {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(#FFEDE4 0%,#FEC8FC 30%, #E1DDFE 100%);
  }
  .arrangements {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .cell {
    margin-top: 1em;
    background-color: #E4CEF9;
    border-radius: 10px;
    padding: 20px;
    display: block;
  }

  .col {
    width: 25%;
  }

</style>