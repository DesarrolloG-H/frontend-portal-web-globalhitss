<template>
  <CapsuleSection class="capsule-bd" title="Base Datos">
    <div class="group-input">
      <SelectForm
        label="Nombre de Base de Datos"
        v-model="form.bd"
        :options="[
          { value: 'TIMEAI', label: 'TIMEAI' },
          { value: 'AUC', label: 'AUC' },
          { value: 'PVUDB', label: 'PVUDB' },
        ]"
      />
      <ButtonSave :agregar="agregar" :form="form" :camposAUsar="['bd']" />
    </div>
    <ListRegister :list="list" :eliminar="eliminar" />

    <div class="group-input">
      <InputForm label="Hora Inicio" type="time" v-model="form.horaInicio" />
      <InputForm label="Hora Fin" type="time" v-model="form.horaFin" />
    </div>
  </CapsuleSection>
</template>

<script lang="ts" setup>
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import InputForm from '@/modules/control-incidencias/components/base/InputForm.vue'
import SelectForm from '@/modules/control-incidencias/components/base/SelectForm.vue'
import ButtonSave from '../base/ButtonSave.vue'
import ListRegister from '../base/ListRegisterSingle.vue'
import { ref } from 'vue'
import { useDatabaseList } from '../../composables/useControlInc'
const { list, eliminar, agregar } = useDatabaseList()
const form = ref({
  bd: '',
  horaInicio: '',
  horaFin: '',
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
.capsule-bd {
  min-inline-size: 46%;
  flex: 1;
}
</style>
