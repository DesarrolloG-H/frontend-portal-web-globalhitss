<template>
  <CapsuleSection class="section-rca" title="Causa y RCA">
    <BaseTextarea
      label="¿Cuál fue el origen del evento?"
      v-model="form.origen"
      placeholder="Escriba un resumen del incidente"
    />
    <div class="group-input">
      <InputCheck label="Aplica RCA" v-model="form.aplicaRCA" />
      <SelectForm
        label="Tipo Afectación"
        v-model="form.tipoAfectacion"
        :options="[
          { value: '1', label: 'ENTIDAD YAPE' },
          { value: '2', label: 'ENTIDAD BCP' },
          { value: '3', label: 'CLARO' },
          { value: '4', label: 'INTEGRACION PROYECTOS' },
          { value: '5', label: 'PROYECTOS' },
          { value: '6', label: 'DBA' },
          { value: '7', label: 'SAP' },
          { value: '8', label: 'RENIEC' },
          { value: '9', label: 'ENTIDAD PVU' },
          { value: '10', label: 'ENTIDAD SCOTIABANK' },
          { value: '11', label: 'ENTIDAD BBVA' },
          { value: '12', label: 'ENTIDAD INTERBANK' },
          { value: '13', label: 'ENTIDAD RED DIGITAL PERU' },
          { value: '14', label: 'ENTIDAD BANCO NACION' },
          { value: '15', label: 'OPTIVA' },
          { value: '16', label: 'NOVATRONIC' },
          { value: '17', label: 'SOPORTE DE RED SEDE CALL' },
          { value: '18', label: 'EQUIPO UNIX' },
          { value: '19', label: 'INTEGRACION' },
          { value: '20', label: 'BOSS' },
          { value: '21', label: 'SOPORTE BI' },
          { value: '22', label: 'EQUIPO BOSO' },
          { value: '23', label: 'TELCEL' },
          { value: '24', label: 'DBA Y UNIX' },
        ]"
      />
    </div>
  </CapsuleSection>
</template>

<script setup>
import { ref } from 'vue'
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import BaseTextarea from '@/modules/control-incidencias/components/base/TextareaForm.vue'
import InputCheck from '../base/InputCheck.vue'
import SelectForm from '../base/SelectForm.vue'

const form = ref({
  origen: '',
  aplicaRCA: '',
  responsable: '',
  transaccion: '',
  tipoTransaccion: '',
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

.section-rca {
  min-inline-size: 46%;
  flex: 1;
}
</style>
