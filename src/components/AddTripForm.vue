<template>
  <div class="addTripFormContainer">
    <custom-input
      placeholder="Miejsce"
      :customStyles="{width: '45%'}"
      @handle-change="(e) => handleChange('place', e)"
    />
    <custom-input
      placeholder="Data rozpoczęcia"
      :customStyles="{width: '45%'}"
      @handle-change="(e) => handleChange('startDate', e)"
    />
    <custom-input
      placeholder="Data zakończenia"
      :customStyles="{width: '45%'}"
      @handle-change="(e) => handleChange('endDate', e)"
    />
    <div class="buttonContainer">
      <custom-button
        label="Dodaj"
        @click="addTrip"
        :disabled="[formValues.place, formValues.startDate, formValues.endDate].some(item => item.length == 0)"
      />
    </div>
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue';
import CustomButton from './CustomButton.vue';
import { ref } from 'vue';

const formValues = ref({ place: '', endDate: '', startDate: '' })

export default {
  components: {
    CustomInput,
    CustomButton
},
  methods: {
    addTrip: function() {
      this.$emit('refresh-trips')
    },
    handleChange: function(type, e) {
      const values = formValues.value
      values[type] = e.target.value
      formValues.value = values
    }
  },
  data: function () {
    return {
      formValues: formValues,
    }
  },
  async mounted() {
    console.log(this)
  }
}

</script>
<style scoped>
  .addTripFormContainer {
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
