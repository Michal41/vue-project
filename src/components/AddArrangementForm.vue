<template>
  <div class="addArrangementFormContainer">
    <custom-input
      placeholder="Wpisz tutaj"
      :customStyles="{width: '100%'}"
      @handle-change="handleInputChange"
    />
    <div class="buttonContainer">
      <custom-button
        label="Dodaj"
        @click="addArrangement"
        :disabled="note.length == 0"
      />
    </div>
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue';
import CustomButton from './CustomButton.vue';

import { ref } from 'vue';

const note = ref('')


export default {
  components: {
    CustomInput,
    CustomButton,
},
  methods: {
    addArrangement: async function() {
      const response = await fetch(`http://localhost:8080/arrangement/${this.type === 'toTake' ? '1' : '2'}/${this.tripId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({note: note.value}),
      });
      console.log(response);
      this.$emit('refresh-arrangements');
    },
    handleInputChange: function(e) {
      note.value = e.target.value
    },
  },
  data: function () {
    return {
      note,
    }
  },
  props: {
    type: String,
    tripId: String,
  },
  async mounted() {
  }
}

</script>
<style scoped>
  .addArrangementFormContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1em;
  }
  .buttonContainer {
    display: flex;
    align-items: flex-end;
  }
</style>


