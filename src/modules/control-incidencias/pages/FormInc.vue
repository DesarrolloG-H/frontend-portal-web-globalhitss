<template>
  <div class="container-datos-generales">
    <h2>Formulario INC</h2>
    <form class="formulario" action="">
      <DatosGenerales />
      <div class="group-base">
        <BaseDatos />
        <ServiciosRed
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
        />
        <ServiciosRed
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
        />
        <ServiciosRed
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
        />
        <ServiciosRed
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
        />
        <CausaRca />
      </div>
      <TransaccionRed />
      <GestionEventos />
      <DatosExtra />
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import DatosGenerales from '../components/secciones/DatosGenerales.vue'
import BaseDatos from '../components/secciones/BaseDatos.vue'
import ServiciosRed from '../components/secciones/ServiciosRed.vue'
import CausaRca from '../components/secciones/CausaRca.vue'
import TransaccionRed from '../components/secciones/TransaccionRed.vue'
import GestionEventos from '../components/secciones/GestionEventos.vue'
import DatosExtra from '../components/secciones/DatosExtra.vue'
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
</style>
