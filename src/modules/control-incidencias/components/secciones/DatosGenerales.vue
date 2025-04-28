<template>
  <CapsuleSection title="Datos Generales">
    <div class="group-input">
      <InputForm label="Fecha" type="date" v-model="form.fecha" />
      <InputForm label="Semana" type="number" placeholder="1" v-model="form.semana" />
    </div>
    <div class="group-input">
      <InputForm label="Ticket" placeholder="INC000000000" v-model="form.ticket" />
      <SelectForm
        label="Tipo Afectación"
        v-model="form.tipoAfectacion"
        :options="[
          { value: '1', label: 'Informativo' },
          { value: '2', label: 'Parcial' },
          { value: '3', label: 'Total' },
        ]"
      />
    </div>
    <div class="group-input">
      <BaseTextarea
        label="Resumen"
        v-model="form.resumen"
        placeholder="Escriba un resumen del incidente"
      />

      <BaseTextarea
        label="Impacto"
        v-model="form.impacto"
        placeholder="Escriba un resumen del incidente"
      />
    </div>
  </CapsuleSection>
</template>

<script setup>
import InputForm from '@/modules/control-incidencias/components/base/InputForm.vue'
import SelectForm from '@/modules/control-incidencias/components/base/SelectForm.vue'
import BaseTextarea from '@/modules/control-incidencias/components/base/TextareaForm.vue'
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import { ref } from 'vue'

const form = ref({
  fecha: '',
  semana: '',
  ticket: '',
  tipoAfectacion: '',
  resumen: '',
  impacto: '',
})
</script>

<style scoped>
.container-datos-generales {
  inline-size: 500px;
}

.group-input {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}
</style>
