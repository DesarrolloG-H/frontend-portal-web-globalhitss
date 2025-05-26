<template>
  <div class="container-datos-generales">
    <h2>Formulario INC</h2>
    <form @submit.prevent="guardar" novalidate class="formulario" action="">
      <DatosGenerales />
      <!-- Checkboxes para seleccionar secciones -->
      <div class="checkbox-group">
        <label><input type="checkbox" v-model="mostrar.baseDatos" /> Base de Datos</label>
        <label><input type="checkbox" v-model="mostrar.nodos" /> Nodos</label>
        <label><input type="checkbox" v-model="mostrar.servicios" /> Servicios</label>
        <label><input type="checkbox" v-model="mostrar.balanceador" /> Balanceador</label>
        <label><input type="checkbox" v-model="mostrar.servidor" /> Servidor</label>
        <label><input type="checkbox" v-model="mostrar.causaRca" /> Causa RCA</label>
      </div>
      <div class="group-base">
        <BaseDatos v-show="mostrar.baseDatos" />
        <ServiciosRed
          v-show="mostrar.nodos"
          title="Nodos"
          tipo="nodo"
          :fields="[
            [
              {
                label: 'Nombre Nodo',
                type: 'text',
                placeholder: 'Nombre Nodo',
                model: 'nombreNodo',
              },
              { label: 'IP Nodo', type: 'text', placeholder: 'IP Nodo', model: 'ipNodo' },
            ],
          ]"
          :camposAUsar="['nombreNodo', 'ipNodo']"
        />
        <ServiciosRed
          v-show="mostrar.servicios"
          title="Servicios"
          tipo="servicio"
          :fields="[
            [
              {
                label: 'Nombre Servicio',
                type: 'text',
                placeholder: 'Nombre Servicio',
                model: 'nombreServicio',
              },
              {
                label: 'Ip Servicio',
                type: 'text',
                placeholder: 'Ip Servicio',
                model: 'ipServicio',
              },
            ],
          ]"
          :camposAUsar="['nombreServicio', 'ipServicio']"
        />
        <ServiciosRed
          v-show="mostrar.balanceador"
          title="Balanceadores"
          tipo="balanceador"
          :fields="[
            [
              {
                label: 'Nombre Balanceador',
                type: 'text',
                placeholder: 'Nombre Balanceador',
                model: 'nombreBalanceador',
              },
              {
                label: 'Ip Balanceador',
                type: 'text',
                placeholder: 'Ip Balanceador',
                model: 'ipBalanceador',
              },
            ],
          ]"
          :camposAUsar="['nombreBalanceador', 'ipBalanceador']"
        />
        <ServiciosRed
          v-show="mostrar.servidor"
          title="Servidor"
          tipo="servidor"
          :fields="[
            [
              {
                label: 'Nombre Servidor',
                type: 'text',
                placeholder: 'Nombre Servidor',
                model: 'nombreServidor',
              },
              {
                label: 'Ip Servidor',
                type: 'text',
                placeholder: 'Ip Servidor',
                model: 'ipServidor',
              },
            ],
          ]"
          :camposAUsar="['nombreServidor', 'ipServidor']"
        />
        <CausaRca v-show="mostrar.causaRca" />
      </div>
      <TransaccionRed />
      <GestionEventos />
      <DatosExtra />
      <ButtonSaveForm />
    </form>
  </div>
</template>

<script setup>
import { useFormularioStore } from '@/modules/control-incidencias/stores/useFormularioStore'
import { validarTodoFormulario } from '@/modules/control-incidencias/validations/validarFormularioCompleto'
import { generarPayload } from '@/modules/control-incidencias/utils/generarPayload'
import { reactive } from 'vue'
import axios from 'axios'
import DatosGenerales from '../components/secciones/DatosGenerales.vue'
import BaseDatos from '../components/secciones/BaseDatos.vue'
import ServiciosRed from '../components/secciones/ServiciosRed.vue'
import CausaRca from '../components/secciones/CausaRca.vue'
import TransaccionRed from '../components/secciones/TransaccionRed.vue'
import GestionEventos from '../components/secciones/GestionEventos.vue'
import DatosExtra from '../components/secciones/DatosExtra.vue'
import ButtonSaveForm from '../components/base/ButtonSaveForm.vue'

// Reactive para controlar qué secciones mostrar
const mostrar = reactive({
  baseDatos: false,
  nodos: false,
  servicios: false,
  balanceador: false,
  servidor: false,
  causaRca: false,
})

// PAYLOAD
const formulario = useFormularioStore()

const guardar = async () => {
  const errores = validarTodoFormulario(formulario)
  if (errores.length > 0) {
    alert('Corrige los siguientes errores:\n' + errores.join('\n'))
    return
  }

  const payload = generarPayload(formulario)

  try {
    console.log('📦 Payload final:', JSON.stringify(payload, null, 2))
    const API_URL = import.meta.env.VITE_API_URL
    const res = await axios.post(`${API_URL}/incidencias/formulario`, payload)
    console.log('✅ Insertado:', res.data)
    console.log('✅ Formulario enviado correctamente:', payload)
    formulario.$reset() // ⬅️ limpia todo después de enviar
    Object.keys(mostrar).forEach((key) => (mostrar[key] = false))
  } catch (error) {
    console.error('❌ Error al enviar el formulario:', error)
  }
}
</script>

<style scoped>
h2 {
  font-size: 3rem;
  margin: 0;
  margin-block-start: 1rem;
  margin-block-end: 2rem;
}
.group-base {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-inline-start: 1rem;
}
</style>
