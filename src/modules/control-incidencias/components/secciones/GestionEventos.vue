<template>
  <CapsuleSection title="Gestion Eventos">
    <div class="group-input">
      <BaseTextarea
        label="Acciones Realizadas"
        v-model="form.impacto"
        placeholder="Escriba un resumen del incidente"
      />
      <BaseTextarea
        label="Solución"
        v-model="form.impacto"
        placeholder="Escriba un resumen del incidente"
      />
    </div>
    <div class="group-input">
      <SelectForm
        label="Plan de Acción"
        v-model="form.plataformaAfectada"
        :options="[
          { value: '1', label: 'Tipo 1' },
          { value: '2', label: 'Tipo 2' },
          { value: '3', label: 'Tipo 3' },
          { value: '4', label: 'Tipo 4' },
        ]"
      />
      <InputForm
        label="Lecciones Aprendidas"
        placeholder="Elije tu aplicación"
        v-model="form.aplicacion"
      />
    </div>
    <div class="group-input">
      <InputForm
        label="Responsable del incidente"
        placeholder="Elije tu transacción afectada"
        v-model="form.transaccionAfectada"
      />
      <InputForm
        label="Contacto Claro"
        placeholder="Elije tu transacción afectada"
        v-model="form.transaccionAfectada"
      />
    </div>
    <div class="group-input">
      <InputForm
        label="Responsable Hitss"
        placeholder="Elije tu transacción afectada"
        v-model="form.transaccionAfectada"
      />
      <InputForm
        label="Analista"
        placeholder="Elije tu transacción afectada"
        v-model="form.transaccionAfectada"
      />
    </div>
  </CapsuleSection>
</template>

<script setup>
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import SelectForm from '../base/SelectForm.vue'
import InputForm from '../base/InputForm.vue'
import BaseTextarea from '@/modules/control-incidencias/components/base/TextareaForm.vue'
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
