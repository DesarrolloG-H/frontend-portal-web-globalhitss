<template>
  <CapsuleSection title="Datos Extra">
    <div class="group-input">
      <InputForm label="Cantidad de Tickets" type="number" placeholder="1" v-model="form.semana" />

      <SelectForm
        label="Analista Registro"
        v-model="form.analistaRegistro"
        :options="analistaOptions"
      />
    </div>
  </CapsuleSection>
</template>

<script setup>
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import InputForm from '../base/InputForm.vue'
import SelectForm from '../base/SelectForm.vue'
import { useSelectOptions } from '../../composables/useSelectOptions'

import { ref } from 'vue'
const form = ref({
  cantidadTickets: '',
  analistaRegistro: null,
})

const { options: analistaOptions } = useSelectOptions('analistas')
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
