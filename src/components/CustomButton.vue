<template>
  <button
    class="customInput"
    @click="$emit('handleClick')"
    :style="{background: backgroundColor, color: color }"
  >
  {{label}}
</button>
</template>

<script setup>
  import { defineProps } from 'vue';
  defineProps({
      label: {
        type: String,
        required: true
      },
      backgroundColor: {
        type: String,
        default: '#9E8370',
      },
      color: {
        type: String,
        default: '#2B1D12',
      }
    })
</script>
<style scoped>
  .customInput {
    font-size: 15px;
    border-radius: 15px;
    padding: 1em;
    border: none;
    cursor: pointer;
  }

</style>
