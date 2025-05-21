<template>
  <CapsuleSection class="capsule-bd" title="Base Datos">
    <div class="group-input">
      <SelectForm
        label="Nombre de Base de Datos"
        v-model="baseDatosForm.bd"
        :options="baseDatosOptions"
      />
      <ButtonSave
        type="button"
        :agregar="agregarBaseDato"
        :form="baseDatosForm"
        :camposAUsar="['bd']"
        :onReset="resetForm"
      />
    </div>
    <ListRegister :list="baseDatos" :eliminar="eliminarBaseDato" />

    <div class="group-input">
      <InputForm label="Hora Inicio" type="time" v-model="horaInicioBdGlobal" />
      <InputForm label="Hora Fin" type="time" v-model="horaFinBdGlobal" />
    </div>
  </CapsuleSection>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useFormularioStore } from '@/modules/control-incidencias/stores/useFormularioStore'
import { useSelectOptions } from '../../composables/useSelectOptions'
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import InputForm from '@/modules/control-incidencias/components/base/InputForm.vue'
import SelectForm from '@/modules/control-incidencias/components/base/SelectForm.vue'
import ButtonSave from '../base/ButtonSave.vue'
import ListRegister from '../base/ListRegisterSingle.vue'

const { options: baseDatosOptions } = useSelectOptions('base-datos')

// ✅ Acceso al store
const formulario = useFormularioStore()
const { baseDatos, baseDatosForm, horaInicioBdGlobal, horaFinBdGlobal } = storeToRefs(formulario)
const { agregarBaseDato, eliminarBaseDato } = formulario

const resetForm = () => {
  baseDatosForm.value.bd = null
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
.capsule-bd {
  min-inline-size: 46%;
  flex: 1;
}
</style>
