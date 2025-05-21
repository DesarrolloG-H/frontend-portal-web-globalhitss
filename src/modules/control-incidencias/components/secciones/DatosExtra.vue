<template>
  <CapsuleSection title="Datos Extra">
    <div class="group-input">
      <InputForm
        label="Cantidad de Tickets"
        type="number"
        placeholder="1"
        v-model="datosExtra.cantidadTickets"
      />

      <SelectForm
        label="Analista Registro"
        v-model="datosExtra.analistaRegistro"
        :options="analistaOptions"
      />
    </div>
  </CapsuleSection>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useFormularioStore } from '@/modules/control-incidencias/stores/useFormularioStore'

import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import InputForm from '../base/InputForm.vue'
import SelectForm from '../base/SelectForm.vue'

import { useSelectOptions } from '../../composables/useSelectOptions'

const formulario = useFormularioStore()
const { datosExtra } = storeToRefs(formulario)

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
