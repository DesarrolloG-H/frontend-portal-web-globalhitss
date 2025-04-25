<template>
  <CapsuleSection title="Datos Extra">
    <div class="group-input">
      <BaseTextarea
        label="Acciones Realizadas"
        v-model="form.impacto"
        placeholder="Escriba un resumen del incidente"
      />
      <InputForm label="Cantidad de Tickets" type="number" placeholder="1" v-model="form.semana" />
    </div>
    <div class="group-input">
      <InputForm
        label="Cantidad de Tickets impactados a Hitss"
        type="number"
        placeholder="1"
        v-model="form.semana"
      />
      <InputForm
        label="Lecciones Aprendidas"
        placeholder="Elije tu aplicación"
        v-model="form.aplicacion"
      />
    </div>
    <div class="group-input">
      <InputForm
        label="Analista Registro"
        placeholder="Elije tu transacción afectada"
        v-model="form.transaccionAfectada"
      />
    </div>
  </CapsuleSection>
</template>

<script setup>
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
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
