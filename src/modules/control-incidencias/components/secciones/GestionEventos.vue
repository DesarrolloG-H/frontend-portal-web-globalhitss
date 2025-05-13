<template>
  <CapsuleSection title="Gestion Eventos">
    <div class="group-input">
      <BaseTextarea
        label="Acciones Realizadas"
        v-model="form.accionesRealizadas"
        placeholder="Escriba un resumen del incidente"
      />
      <BaseTextarea
        label="Solución"
        v-model="form.solucion"
        placeholder="Escriba un resumen del incidente"
      />
    </div>
    <div class="group-input">
      <InputForm
        label="Lecciones Aprendidas"
        placeholder="Elije tu aplicación"
        v-model="form.leccionesAprendidas"
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
  accionesRealizadas: '',
  solucion: '',
  leccionesAprendidas: '',
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
