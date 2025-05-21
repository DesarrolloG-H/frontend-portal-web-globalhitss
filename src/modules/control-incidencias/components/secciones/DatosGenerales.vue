<template>
  <CapsuleSection title="Datos Generales">
    <div class="group-input">
      <InputForm label="Fecha" type="date" v-model="datosGenerales.fecha" />
      <InputForm
        label="Semana"
        type="number"
        placeholder="1"
        disabled
        v-model="datosGenerales.semana"
      />
    </div>
    <div class="group-input">
      <InputForm label="Ticket" placeholder="INC000000000" v-model="datosGenerales.ticket" />
      <SelectForm
        label="Tipo Afectación"
        v-model="datosGenerales.tipoAfectacion"
        :options="tipoAfectacionOptions"
      />
    </div>
    <div class="group-input">
      <BaseTextarea
        label="Resumen"
        v-model="datosGenerales.resumen"
        placeholder="Escriba un resumen del incidente"
      />

      <BaseTextarea
        label="Impacto"
        v-model="datosGenerales.impacto"
        placeholder="Escriba un resumen del incidente"
      />
    </div>
  </CapsuleSection>
</template>

<script setup>
import { useFormularioStore } from '@/modules/control-incidencias/stores/useFormularioStore'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { obtenerSemanaISO } from '@/modules/control-incidencias/utils/fecha'
import { useSelectOptions } from '../../composables/useSelectOptions'
import InputForm from '@/modules/control-incidencias/components/base/InputForm.vue'
import SelectForm from '@/modules/control-incidencias/components/base/SelectForm.vue'
import BaseTextarea from '@/modules/control-incidencias/components/base/TextareaForm.vue'
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'

const formulario = useFormularioStore()
const { datosGenerales } = storeToRefs(formulario)

watch(
  () => datosGenerales.value.fecha,
  (nuevaFecha) => {
    if (nuevaFecha) {
      datosGenerales.value.semana = obtenerSemanaISO(nuevaFecha)
    }
  },
)
const { options: tipoAfectacionOptions } = useSelectOptions('tipo-afectacion')
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
