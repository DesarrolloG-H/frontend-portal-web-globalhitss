<template>
  <CapsuleSection class="capsule-bd" title="Base Datos">
    <div class="group-input">
      <SelectForm label="Nombre de Base de Datos" v-model="form.bd" :options="baseDatosOptions" />
      <ButtonSave :agregar="agregar" :form="form" :camposAUsar="['bd']" :onReset="resetForm" />
    </div>
    <ListRegister :list="list" :eliminar="eliminar" />

    <div class="group-input">
      <InputForm label="Hora Inicio" type="time" v-model="form.horaInicioBd" />
      <InputForm label="Hora Fin" type="time" v-model="form.horaFinBd" />
    </div>
  </CapsuleSection>
</template>

<script lang="ts" setup>
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import InputForm from '@/modules/control-incidencias/components/base/InputForm.vue'
import SelectForm from '@/modules/control-incidencias/components/base/SelectForm.vue'
import ButtonSave from '../base/ButtonSave.vue'
import ListRegister from '../base/ListRegisterSingle.vue'
import { useSelectOptions } from '../../composables/useSelectOptions'
import { ref } from 'vue'
import { useDatabaseList } from '../../composables/useControlInc'
const { list, eliminar, agregar } = useDatabaseList()
const form = ref({
  bd: null,
  horaInicioBd: '',
  horaFinBd: '',
})
const { options: baseDatosOptions } = useSelectOptions('base-datos')

const resetForm = () => {
  form.value.bd = null
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
