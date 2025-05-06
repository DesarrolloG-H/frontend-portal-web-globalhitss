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
        :agregar="agregar"
        :form="form"
        :camposAUsar="camposAUsar"
      />
      <ListRegisterMulti v-if="groupIndex === 0" :list="list" :eliminar="eliminar" />
    </div>
  </CapsuleSection>
</template>

<script setup>
import { reactive } from 'vue'
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import InputForm from '@/modules/control-incidencias/components/base/InputForm.vue'
import ButtonSave from '../base/ButtonSave.vue'
import { useDatabaseList } from '../../composables/useControlInc'
import ListRegisterMulti from '../base/ListRegisterMulti.vue'
const { list, agregar, eliminar } = useDatabaseList()

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
  // agregar: {
  //   type: Function,
  //   required: true,
  // },
})

// Crear objeto reactivo para almacenar los datos de los campos
const form = reactive({})

// Inicializamos las claves según los modelos definidos en fields
props.fields.flat().forEach((input) => {
  form[input.model] = ''
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
