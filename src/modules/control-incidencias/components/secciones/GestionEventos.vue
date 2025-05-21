<template>
  <CapsuleSection title="Gestion Eventos">
    <div class="group-input">
      <BaseTextarea
        label="Acciones Realizadas"
        v-model="gestionEventos.accionesRealizadas"
        placeholder="Escriba un resumen del incidente"
      />
      <BaseTextarea
        label="Solución"
        v-model="gestionEventos.solucion"
        placeholder="Escriba un resumen del incidente"
      />
    </div>
    <div class="group-input">
      <InputForm
        label="Lecciones Aprendidas"
        placeholder="Elije tu aplicación"
        v-model="gestionEventos.leccionesAprendidas"
      />
    </div>
  </CapsuleSection>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useFormularioStore } from '@/modules/control-incidencias/stores/useFormularioStore'
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import InputForm from '../base/InputForm.vue'
import BaseTextarea from '@/modules/control-incidencias/components/base/TextareaForm.vue'

const formulario = useFormularioStore()
const { gestionEventos } = storeToRefs(formulario)
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
