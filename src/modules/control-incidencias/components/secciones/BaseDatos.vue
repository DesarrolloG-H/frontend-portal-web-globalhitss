<template>
  <CapsuleSection class="capsule-bd" title="Base Datos">
    <div class="group-input">
      <InputForm label="Nombre" type="text" placeholder="Nombre" v-model="form.nodo" />
    </div>
    <div class="group-input">
      <InputForm label="Hora Inicio" type="time" v-model="form.horaInicio" />
      <InputForm label="Hora Fin" type="time" v-model="form.horaFin" />
    </div>
  </CapsuleSection>
</template>

<script lang="ts" setup>
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import InputForm from '@/modules/control-incidencias/components/base/InputForm.vue'
import { ref } from 'vue'
const form = ref({
  nodo: '',
  ipNodo: '',
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
