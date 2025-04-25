<template>
  <CapsuleSection title="Nodos">
    <div class="group-input">
      <InputForm label="Nodo" type="text" placeholder="Nodo" v-model="form.nodo" />
      <InputForm label="IP Nodo" type="text" placeholder="Nodo" v-model="form.ipNodo" />
    </div>
    <div class="group-input">
      <InputForm label="Hora Inicio" type="time" placeholder="Nodo" v-model="form.horaInicio" />
      <InputForm label="Hora Fin" type="time" placeholder="Nodo" v-model="form.horaFin" />
    </div>
  </CapsuleSection>
</template>

<script lang="ts" setup>
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import InputForm from '@/modules/control-incidencias/components/base/InputForm.vue'
import { ref } from 'vue'
const form = ref({
  nodo: '',
  ipNodo: '',
  horaInicio: '',
  horaFin: '',
})
</script>

<style scoped>
.group-input {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}
</style>
