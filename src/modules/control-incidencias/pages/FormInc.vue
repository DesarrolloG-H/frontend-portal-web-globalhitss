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
          :fields="[
            [
              { label: 'Nodo', type: 'text', placeholder: 'Nodo', model: 'nodo' },
              { label: 'IP Nodo', type: 'text', placeholder: 'IP Nodo', model: 'ipNodo' },
            ],
            [
              {
                label: 'Hora Inicio',
                type: 'time',
                placeholder: 'Hora Inicio',
                model: 'horaInicioNodo',
              },
              { label: 'Hora Fin', type: 'time', placeholder: 'Hora Fin', model: 'horaFinNodo' },
            ],
          ]"
          :camposAUsar="['nodo', 'ipNodo']"
        />
        <ServiciosRed
          v-show="mostrar.servicios"
          title="Servicios"
          :fields="[
            [
              { label: 'Servicio', type: 'text', placeholder: 'Servicio', model: 'servicio' },
              {
                label: 'Nombre Servicio',
                type: 'text',
                placeholder: 'Nombre Servicio',
                model: 'nombreServicio',
              },
            ],
            [
              {
                label: 'Hora Inicio',
                type: 'time',
                placeholder: 'Hora Inicio',
                model: 'horaInicioServicio',
              },
              {
                label: 'Hora Fin',
                type: 'time',
                placeholder: 'Hora Fin',
                model: 'horaFinServicio',
              },
            ],
          ]"
          :camposAUsar="['servicio', 'nombreServicio']"
        />
        <ServiciosRed
          v-show="mostrar.balanceador"
          title="Balanceador"
          :fields="[
            [
              {
                label: 'Balanceador',
                type: 'text',
                placeholder: 'Balanceador',
                model: 'balanceador',
              },
              {
                label: 'Nombre Balanceador',
                type: 'text',
                placeholder: 'Nombre Balanceador',
                model: 'nombreBalanceador',
              },
            ],
            [
              {
                label: 'Hora Inicio',
                type: 'time',
                placeholder: 'Hora Inicio',
                model: 'horaInicioBalanceador',
              },
              {
                label: 'Hora Fin',
                type: 'time',
                placeholder: 'Hora Fin',
                model: 'horaFinBalanceador',
              },
            ],
          ]"
          :camposAUsar="['balanceador', 'nombreBalanceador']"
        />
        <ServiciosRed
          v-show="mostrar.servidor"
          title="Servidor"
          :fields="[
            [
              {
                label: 'Servidor',
                type: 'text',
                placeholder: 'Servidor',
                model: 'servidor',
              },
              {
                label: 'Nombre Servidor',
                type: 'text',
                placeholder: 'Nombre Servidor',
                model: 'nombreServidor',
              },
            ],
            [
              {
                label: 'Hora Inicio',
                type: 'time',
                placeholder: 'Hora Inicio',
                model: 'horaInicioServidor',
              },
              {
                label: 'Hora Fin',
                type: 'time',
                placeholder: 'Hora Fin',
                model: 'horaFinServidor',
              },
            ],
          ]"
          :camposAUsar="['servidor', 'nombreServidor']"
        />
        <CausaRca v-show="mostrar.causaRca" />
      </div>
      <TransaccionRed />
      <GestionEventos />
      <DatosExtra />
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import DatosGenerales from '../components/secciones/DatosGenerales.vue'
import BaseDatos from '../components/secciones/BaseDatos.vue'
import ServiciosRed from '../components/secciones/ServiciosRed.vue'
import CausaRca from '../components/secciones/CausaRca.vue'
import TransaccionRed from '../components/secciones/TransaccionRed.vue'
import GestionEventos from '../components/secciones/GestionEventos.vue'
import DatosExtra from '../components/secciones/DatosExtra.vue'
// import { useDatabaseList } from '../composables/useControlInc'

// const {
//   // agregarBD,
//   agregarNodo,
//   agregarServicio,
//   agregarBalanceador,
//   agregarServidor,
// } = useDatabaseList()
// Reactive para controlar qué secciones mostrar
const mostrar = reactive({
  baseDatos: false,
  nodos: false,
  servicios: false,
  balanceador: false,
  servidor: false,
  causaRca: false,
})
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
