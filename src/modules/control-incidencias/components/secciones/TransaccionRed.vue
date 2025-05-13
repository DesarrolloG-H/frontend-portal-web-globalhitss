<template>
  <CapsuleSection title="Transacción">
    <div class="group-input">
      <ButtonSave :form="form" :camposAUsar="camposAUsar" :agregar="agregar" :onReset="resetForm" />
    </div>

    <div class="group-input">
      <SelectForm
        label="Aplicación Afectada"
        v-model="form.aplicacion"
        :options="aplicacionesOptions"
      />

      <SelectForm label="Transacción" v-model="form.transaccion" :options="transaccionesOptions" />
    </div>
    <div class="group-input">
      <SelectForm
        label="Tipo de Transacción"
        v-model="form.tipoTransaccion"
        :options="tiposTransaccionOptions"
      />

      <SelectForm
        label="Plataforma Tecnológica Afectada"
        v-model="form.plataformaAfectada"
        :options="plataformaOptions"
      />
    </div>
    <div class="group-input">
      <SelectForm label="Torre Impactada" v-model="form.torreImpactada" :options="torreOptions" />
    </div>
    <div class="group-input">
      <InputForm label="Hora inicio" type="time" v-model="form.horaInicioTransaccion" />
      <InputForm label="Hora Fin" type="time" v-model="form.horaFinTransaccion" />
    </div>
    <ListRegisterMulti :list="list" :eliminar="eliminar" />
  </CapsuleSection>
</template>

<script setup>
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import SelectForm from '../base/SelectForm.vue'
import InputForm from '../base/InputForm.vue'
import { useSelectOptions } from '../../composables/useSelectOptions'
import { useTransaccionesOptions } from '../../composables/useTransaccionesOptions'
import { useTiposTransaccionOptions } from '../../composables/useTiposTransaccionOptions'
import { useDatabaseList } from '../../composables/useControlInc'
import ButtonSave from '../base/ButtonSave.vue'
import ListRegisterMulti from '../base/ListRegisterMulti.vue'
import { ref, computed } from 'vue'
const form = ref({
  aplicacion: null,
  transaccion: null,
  tipoTransaccion: null,
  plataformaAfectada: null,
  torreImpactada: null,
  horaInicioTransaccion: '',
  horaFinTransaccion: '',
})

const camposAUsar = [
  'aplicacion',
  'transaccion',
  'tipoTransaccion',
  'plataformaAfectada',
  'torreImpactada',
  'horaInicioTransaccion',
  'horaFinTransaccion',
]

const { list, agregar, eliminar } = useDatabaseList()

const { options: torreOptions } = useSelectOptions('torres')
const { options: plataformaOptions } = useSelectOptions('plataformas')
const { options: aplicacionesOptions } = useSelectOptions('aplicaciones')
const { options: transaccionesOptions } = useTransaccionesOptions(
  computed(() => form.value.aplicacion?.id),
)
const { options: tiposTransaccionOptions } = useTiposTransaccionOptions(
  computed(() => form.value.aplicacion?.id),
  computed(() => form.value.transaccion?.id),
)

const resetForm = () => {
  camposAUsar.forEach((campo) => {
    const valor = form.value[campo]
    form.value[campo] = typeof valor === 'object' && valor !== null ? null : ''
  })
}
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
