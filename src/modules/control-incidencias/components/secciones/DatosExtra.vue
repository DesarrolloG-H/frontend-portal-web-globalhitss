<template>
  <CapsuleSection title="Datos Extra">
    <div class="group-input">
      <InputForm label="Cantidad de Tickets" type="number" placeholder="1" v-model="form.semana" />

      <SelectForm
        label="Analista Registro"
        v-model="form.analistaRegistro"
        :options="[
          { value: '1', label: 'Walter Arizaca Arizabal' },
          { value: '2', label: 'Jesus Antonio Alvarado Garcia' },
          { value: '3', label: 'Gregory  Anthony Sanchez Valencia' },
          { value: '4', label: 'Eduardo Piero Leandro Pretel' },
          { value: '5', label: 'Carlos Huarcaya Sarmiento' },
          { value: '6', label: 'Alonso Muñoz Perez' },
        ]"
      />
    </div>
  </CapsuleSection>
</template>

<script setup>
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import InputForm from '../base/InputForm.vue'
import SelectForm from '../base/SelectForm.vue'

import { ref } from 'vue'
const form = ref({
  cantidadTickets: '',
  analistaRegistro: '',
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
