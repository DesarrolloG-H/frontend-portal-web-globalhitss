<template>
  <CapsuleSection class="section-rca" title="Causa y RCA">
    <BaseTextarea
      label="¿Cuál fue el origen del evento?"
      v-model="form.origen"
      placeholder="Escriba un resumen del incidente"
    />
    <div class="group-input">
      <InputCheck label="Aplica RCA" v-model="form.aplicaRCA" />
      <InputForm
        label="Responsable RCA"
        placeholder="Analista Responsable"
        v-model="form.responsable"
      />
    </div>
  </CapsuleSection>
</template>

<script setup>
import { ref } from 'vue'
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import BaseTextarea from '@/modules/control-incidencias/components/base/TextareaForm.vue'
import InputCheck from '../base/InputCheck.vue'
import InputForm from '../base/InputForm.vue'

const form = ref({
  origen: '',
  aplicaRCA: '',
  responsable: '',
  transaccion: '',
  tipoTransaccion: '',
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

.section-rca {
  min-inline-size: 46%;
  flex: 1;
}
</style>
