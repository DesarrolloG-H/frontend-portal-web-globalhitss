<template>
  <CapsuleSection title="Transacción">
    <div class="group-input">
      <SelectForm
        label="Transacción"
        v-model="form.transaccion"
        :options="[
          { value: '1', label: 'Tipo 1' },
          { value: '2', label: 'Tipo 2' },
          { value: '3', label: 'Tipo 3' },
          { value: '4', label: 'Tipo 4' },
        ]"
      />
      <InputForm
        label="Tipo de Transacción"
        placeholder="Analista Responsable"
        v-model="form.tipoTransaccion"
      />
    </div>
    <div class="group-input">
      <SelectForm
        label="Plataforma Tecnológica Afectada"
        v-model="form.plataformaAfectada"
        :options="[
          { value: '1', label: 'Tipo 1' },
          { value: '2', label: 'Tipo 2' },
          { value: '3', label: 'Tipo 3' },
          { value: '4', label: 'Tipo 4' },
        ]"
      />
      <InputForm label="Aplicación" placeholder="Elije tu aplicación" v-model="form.aplicacion" />
    </div>
    <div class="group-input">
      <InputForm
        label="Transacción Afectada"
        placeholder="Elije tu transacción afectada"
        v-model="form.transaccionAfectada"
      />
      <SelectForm
        label="Torre Impactada"
        v-model="form.torreImpactada"
        :options="[
          { value: '1', label: 'Tipo 1' },
          { value: '2', label: 'Tipo 2' },
          { value: '3', label: 'Tipo 3' },
          { value: '4', label: 'Tipo 4' },
        ]"
      />
    </div>
    <div class="group-input">
      <InputForm label="Hora inicio" type="time" v-model="form.fecha" />
      <InputForm label="Hora Fin" type="time" v-model="form.fecha" />
    </div>
  </CapsuleSection>
</template>

<script setup>
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import SelectForm from '../base/SelectForm.vue'
import InputForm from '../base/InputForm.vue'
import { ref } from 'vue'
const form = ref({
  transaccion: '',
  tipoTransaccion: '',
  plataformaAfectada: '',
  aplicacion: '',
  transaccionAfectada: '',
  torreImpactada: '',
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
