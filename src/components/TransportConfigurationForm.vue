<template>
  <div class="transportConfigurationFormContainer">
    <custom-input
      placeholder="Nazwa transportu"
      :customStyles="{width: '45%'}"
      @handle-change="(e) => handleInputChange('name', e)"
    />
    <custom-date-picker
      placeholder="Data odjazdu"
      :customStyles="{width: '45%'}"
      @date-changed="(e) => handleDateChange('startDate', e)"
    />
    <custom-input
      placeholder="Miejsce odjazdu"
      :customStyles="{width: '45%'}"
      @handle-change="(e) => handleInputChange('startPlace', e)"
    />
    <custom-date-picker
      placeholder="Data przyjazdu"
      :customStyles="{width: '45%'}"
      @date-changed="(e) => handleDateChange('endDate', e)"
    />
    <custom-input
      placeholder="Miejsce przyjazdu"
      :customStyles="{width: '45%'}"
      @handle-change="(e) => handleInputChange('endPlace', e)"
    />
    <custom-input
      placeholder="Kolejnosc transportu"
      :customStyles="{width: '45%', height: '60px'}"
      @handle-change="(e) => handleInputChange('order', e)"
    />
    <div class="buttonContainer">
      <custom-button
        label="Dodaj"
        @click="addTrip($route.params)"
        :disabled="[formValues.name, formValues.startDate, formValues.startPlace,
                    formValues.endDate, formValues.order].some(item => item.length == 0)"
      />
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue';
import CustomDatePicker from './CustomDatePicker.vue';
import CustomInput from './CustomInput.vue';

import { ref } from 'vue';
const formValues = ref({ name: '', startDate: '', startPlace: '', endDate: '', order: '' })

export default {
  components: {
    CustomButton,
    CustomDatePicker,
    CustomInput
},
  methods: {
    addTrip: async function(routeParams) {
      const { id } = routeParams
      await fetch(`http://localhost:8080/transport/${id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues.value),
      });
      this.$emit('refresh-transports');
    },
    handleInputChange: function(type, e) {
      const values = formValues.value
      values[type] = e.target.value
      formValues.value = values
    },
    handleDateChange: function(type, e) {
      const values = formValues.value
      values[type] = e.toISOString().split('T')[0]
      formValues.value = values
    }
  },
  data: function () {
    return {
      formValues: formValues,
    }
  },
  async mounted() {
  }
}

</script>
<style scoped>
  .transportConfigurationFormContainer {
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


