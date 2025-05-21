<template>
  <CapsuleSection class="section-rca" title="Causa y RCA">
    <BaseTextarea
      label="¿Cuál fue el origen del evento?"
      v-model="causaRca.origen"
      placeholder="Escriba un resumen del incidente"
    />
    <div class="group-input">
      <InputCheck label="Aplica RCA" v-model="causaRca.aplicaRCA" />
      <SelectForm
        label="Responsable RCA"
        v-model="causaRca.responsableRca"
        :options="responsableRcaOptions"
      />
    </div>
  </CapsuleSection>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useFormularioStore } from '@/modules/control-incidencias/stores/useFormularioStore'
import { useSelectOptions } from '../../composables/useSelectOptions'
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import BaseTextarea from '@/modules/control-incidencias/components/base/TextareaForm.vue'
import InputCheck from '../base/InputCheck.vue'
import SelectForm from '../base/SelectForm.vue'

// Store
const formulario = useFormularioStore()
const { causaRca } = storeToRefs(formulario)

const { options: responsableRcaOptions } = useSelectOptions('responsables-rca')
</script>

<style scoped>
.group-input {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}

.section-rca {
  min-inline-size: 46%;
  flex: 1;
}
</style>
