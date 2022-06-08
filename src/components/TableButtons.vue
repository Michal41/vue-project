<template>

<div class="row table-buttons">
  <div class="col-6">
      <button
    :disabled="disabled"
    class=" buttonEdit(id)"
    @click="$emit('handleClickEdit')"  >
Edytuj
</button>
  </div>
  <div class="col-6">
      <button
    :disabled="disabled"
    class=" buttonRemove"
    @click="$emit('handleClickRemove')">
Usuń</button>

  </div>
</div>

</template>

<script setup>
  import { defineProps } from 'vue';
  defineProps({
      id: {
        type: Number,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    })
</script>
<style scoped>
.table-buttons button {
  border: solid 1px rgb(128, 128, 128);
    border-radius: 16px;
    padding: 0.45em;
    cursor: pointer;
    width: 70px;
    color: white;
    font-weight: 300;

}
.table-buttons button.buttonEdit {
  background-color: rgb(202, 170, 199);
}

.table-buttons button.buttonRemove {
  background-color: rgb(245, 166, 138);
}



</style>
