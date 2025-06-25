<template>
  <CapsuleSection title="Transacción">
    <div class="group-input">
      <ButtonSave
        :form="transaccionForm"
        :camposAUsar="camposAUsar"
        :agregar="agregarTransaccion"
        :onReset="resetForm"
      />
    </div>

    <div class="group-input">
      <SelectForm
        label="Aplicación Afectada"
        v-model="transaccionForm.aplicacion"
        :options="aplicacionesOptions"
      />

      <SelectForm
        label="Transacción"
        v-model="transaccionForm.transaccion"
        :options="transaccionesOptions"
      />
    </div>
    <div class="group-input">
      <SelectForm
        label="Tipo de Transacción"
        v-model="transaccionForm.tipoTransaccion"
        :options="tiposTransaccionOptions"
      />

      <SelectForm
        label="Plataforma Tecnológica Afectada"
        v-model="transaccionForm.plataformaAfectada"
        :options="plataformaOptions"
      />
    </div>
    <div class="group-input">
      <SelectForm
        label="Torre Impactada"
        v-model="transaccionForm.torreImpactada"
        :options="torreOptions"
      />
    </div>
    <div class="group-input">
      <InputForm
        label="Hora inicio"
        type="datetime-local"
        v-model="transaccionForm.horaInicioTransaccion"
      />
      <InputForm
        label="Hora Fin"
        type="datetime-local"
        v-model="transaccionForm.horaFinTransaccion"
      />
    </div>
    <ListRegisterMulti :list="transacciones" :eliminar="eliminarTransaccion" />
  </CapsuleSection>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useFormularioStore } from '@/modules/control-incidencias/stores/useFormularioStore'

import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import SelectForm from '../base/SelectForm.vue'
import InputForm from '../base/InputForm.vue'
import ButtonSave from '../base/ButtonSave.vue'
import ListRegisterMulti from '../base/ListRegisterMulti.vue'
import { useSelectOptions } from '../../composables/useSelectOptions'
import { useTransaccionesOptions } from '../../composables/useTransaccionesOptions'
import { useTiposTransaccionOptions } from '../../composables/useTiposTransaccionOptions'

const formulario = useFormularioStore()
const { transaccionForm, transacciones } = storeToRefs(formulario)
const { agregarTransaccion, eliminarTransaccion } = formulario

const camposAUsar = [
  'aplicacion',
  'transaccion',
  'tipoTransaccion',
  'plataformaAfectada',
  'torreImpactada',
  'horaInicioTransaccion',
  'horaFinTransaccion',
]

const resetForm = () => {
  camposAUsar.forEach((campo) => {
    const valor = transaccionForm.value[campo]
    transaccionForm.value[campo] = typeof valor === 'object' && valor !== null ? null : ''
  })
}

const { options: torreOptions } = useSelectOptions('torres')
const { options: plataformaOptions } = useSelectOptions('plataformas')
const { options: aplicacionesOptions } = useSelectOptions('aplicaciones')

const { options: transaccionesOptions } = useTransaccionesOptions(
  computed(() => transaccionForm.value.aplicacion?.id),
)

const { options: tiposTransaccionOptions } = useTiposTransaccionOptions(
  computed(() => transaccionForm.value.aplicacion?.id),
  computed(() => transaccionForm.value.transaccion?.id),
)
</script>

<style scoped>
.group-input {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}

.group-input:first-of-type {
  justify-content: flex-end;
}
</style>
