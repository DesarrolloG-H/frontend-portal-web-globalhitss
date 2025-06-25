<template>
  <CapsuleSection class="capsule-service" :title="title">
    <div v-for="(group, groupIndex) in fields" :key="groupIndex" class="group-input">
      <InputForm
        v-for="(input, index) in group"
        :key="index"
        :label="input.label"
        :type="input.type"
        :placeholder="input.placeholder"
        v-model="form[input.model]"
      />
      <!-- Mostrar botón solo después del PRIMER grupo -->
      <ButtonSave
        v-if="groupIndex === 0"
        type="button"
        :agregar="agregar"
        :form="form"
        :camposAUsar="camposAUsar"
        :onReset="resetForm"
      />
      <ListRegisterMulti v-if="groupIndex === 0" :list="list" :eliminar="eliminar" />
    </div>
    <!-- Inputs de hora globales por tipo -->
    <div class="group-input" v-if="tipoConHoras.includes(tipo)">
      <InputForm label="Hora Inicio" type="datetime-local" v-model="horaInicioGlobal" />
      <InputForm label="Hora Fin" type="datetime-local" v-model="horaFinGlobal" />
    </div>
  </CapsuleSection>
</template>

<script setup>
import { computed } from 'vue'
import { useFormularioStore } from '@/modules/control-incidencias/stores/useFormularioStore'
import { storeToRefs } from 'pinia'

import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import InputForm from '@/modules/control-incidencias/components/base/InputForm.vue'
import ButtonSave from '../base/ButtonSave.vue'
import ListRegisterMulti from '../base/ListRegisterMulti.vue'

// Props sin TypeScript
const props = defineProps({
  title: String,
  fields: {
    type: Array,
    required: true,
  },
  camposAUsar: {
    type: Array,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
})

const tipoConHoras = ['nodo', 'servicio', 'balanceador', 'servidor']

const formulario = useFormularioStore()
const storeRefs = storeToRefs(formulario)

// Mapeo dinámico de listas
const storeKeyMap = {
  nodo: 'nodos',
  servicio: 'servicios',
  balanceador: 'balanceadores',
  servidor: 'servidores',
}

const formKeyMap = {
  nodo: 'nodoForm',
  servicio: 'servicioForm',
  balanceador: 'balanceadorForm',
  servidor: 'servidorForm',
}

const list = computed(() => storeRefs[storeKeyMap[props.tipo]]?.value || [])
const form = storeRefs[formKeyMap[props.tipo]] // ✅ Apunta al form real del store

const agregar = (item) => formulario.agregarElemento(props.tipo, item)
const eliminar = (item) => formulario.eliminarElemento(props.tipo, item)

const resetForm = () => {
  props.camposAUsar.forEach((campo) => {
    const valor = form[campo]
    form[campo] = typeof valor === 'object' && valor !== null ? null : ''
  })
}

const horaInicioGlobal = computed({
  get() {
    return (
      {
        nodo: storeRefs.horaInicioNodoGlobal,
        servicio: storeRefs.horaInicioServicioGlobal,
        balanceador: storeRefs.horaInicioBalanceadorGlobal,
        servidor: storeRefs.horaInicioServidorGlobal,
      }[props.tipo]?.value || ''
    )
  },
  set(value) {
    const map = {
      nodo: storeRefs.horaInicioNodoGlobal,
      servicio: storeRefs.horaInicioServicioGlobal,
      balanceador: storeRefs.horaInicioBalanceadorGlobal,
      servidor: storeRefs.horaInicioServidorGlobal,
    }
    if (map[props.tipo]) map[props.tipo].value = value
  },
})

const horaFinGlobal = computed({
  get() {
    return (
      {
        nodo: storeRefs.horaFinNodoGlobal,
        servicio: storeRefs.horaFinServicioGlobal,
        balanceador: storeRefs.horaFinBalanceadorGlobal,
        servidor: storeRefs.horaFinServidorGlobal,
      }[props.tipo]?.value || ''
    )
  },
  set(value) {
    const map = {
      nodo: storeRefs.horaFinNodoGlobal,
      servicio: storeRefs.horaFinServicioGlobal,
      balanceador: storeRefs.horaFinBalanceadorGlobal,
      servidor: storeRefs.horaFinServidorGlobal,
    }
    if (map[props.tipo]) map[props.tipo].value = value
  },
})
</script>

<style scoped>
.group-input {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  flex-wrap: wrap;
}

.group-input :deep(.btn-save),
.group-input :deep(.list-register) {
  flex-basis: 100%; /* ocupa toda la fila */
}

.capsule-service {
  min-inline-size: 46%;
  flex: 1;
}
</style>
