<template>
  <div class="addTransportFormContainer container-fluid">
    <div class="row">
      <div class="col-6">
    <custom-input
      placeholder="Nazwa transportu"
      :customStyles="{width: '100%'}"
      @handle-change="handleInputChange"
    />
    </div>
    </div>
    <div class="row"><div class="col-6">
    <custom-date-picker
      placeholder="Data odjazdu"
      :customStyles="{width: '100%'}"
      @date-changed="(e) => handleDateChange('dateStart', e)"
    />

    </div>
    <div class="col-6">
          <custom-date-picker
      placeholder="Data przyjazdu"
      :customStyles="{width: '100%'}"
      @date-changed="(e) => handleDateChange('dateEnd', e)"
    />

    </div></div>
    <div class="row"><div class="col-6">
    <custom-input
      placeholder="Miejsce odjazdu"
      :customStyles="{width: '100%'}"
      @handle-change="handleInputChange"
    />

    </div>
    <div class="col-6">
    <custom-input
      placeholder="Miejsce przyjazdu"
      :customStyles="{width: '100%'}"
      @handle-change="handleInputChange"
    />

    </div></div>
    <div class="row"><div class="col-12">
    <custom-input
      placeholder="Notatka"
      :customStyles="{width: '100%'}"
      @handle-change="handleInputChange"
    />

    </div></div>

    <div class="row pt-2">
      <div class="col-6">    <div class="buttonContainer">
      <custom-button
        label="Dodaj"
        @click="addTrip"
        :disabled="[formValues.placeStart, formValues.placeEnd, formValues.dateStart, formValues.dateEnd].some(item => item.length == 0)"
      />
    </div>
</div>
    </div>

  </div>
</template>

<script>
import CustomInput from './CustomInput.vue';
import CustomButton from './CustomButton.vue';
import CustomDatePicker from './CustomDatePicker.vue';

import { ref } from 'vue';

const formValues = ref({ placeStart: '', placeEnd: '', dateEnd: '', dateStart: '' })
// const image = ref({})

export default {
  components: {
    CustomInput,
    CustomButton,
    CustomDatePicker
},
  methods: {
    addTrip: async function() {
      // const trip = await fetch('http://localhost:8080/trip/', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formValues.value),
      // });
      // const { id } = await trip.json()

      // if(image.value.name) {
      //   const form = new FormData();
      //   form.append("file", image.value);
      //   try {
      //     await fetch(`http://localhost:8080/upload/file/${id}`, {
      //       method: 'POST',
      //       headers: {
      //         'Accept': 'application/json',
      //       },
      //       body: form,
      //   });
      //   } catch (error) {
      //     this.$notify({
      //       title: "Plik za duzy",
      //       type: "error",
      //       text: "Ogarnij sie pik nie moze być wiekszy niz 1048576 bajtów",
      //     })
      //   }
      // }
      // this.$emit('refresh-trips');
    },
    handleInputChange: function(e) {
      const values = formValues.value
      values.placeStart = e.target.value
      formValues.value = values
    },
    handleImageChange: function(e) {
      console.log(e)
      // image.value = e.target.files[0]
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
  .addTransportFormContainer .row {
background: transparent;
}
  .buttonContainer {
    display: flex;
    align-items: flex-end;
    margin-bottom: 2em;
  }
</style>


