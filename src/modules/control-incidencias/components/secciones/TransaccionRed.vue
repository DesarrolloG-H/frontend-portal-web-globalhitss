<template>
  <CapsuleSection title="Transacción">
    <div class="group-input">
      <SelectForm
        label="Aplicación Afectada"
        v-model="form.aplicacion"
        :options="[
          { value: '1', label: 'SIAC UNICO' },
          { value: '2', label: 'SISACT' },
          { value: '3', label: 'APP DE VENTAS' },
          { value: '3', label: 'APP DELIVERY' },
          { value: '3', label: 'APP MICLARO' },
          { value: '3', label: 'MODULO PAQUETES' },
          { value: '3', label: 'WEB RECLAMOS' },
          { value: '3', label: 'INCOGNITO' },
          { value: '3', label: 'SWITCH TRANSACCIONAL' },
          { value: '3', label: 'CRL PRETUPS' },
          { value: '3', label: 'GENESYS' },
          { value: '3', label: 'SW TRANSACCIONAL' },
          { value: '3', label: 'SISACT POSTPAGO' },
          { value: '3', label: 'APP COMERCIO' },
          { value: '3', label: 'SMART HOME' },
          { value: '3', label: 'VPN IVANTI' },
          { value: '3', label: 'SICAR' },
        ]"
      />

      <SelectForm
        label="Transacción"
        v-model="form.transaccion"
        :options="[
          { value: '1', label: 'GENERACIÓN SOT' },
          { value: '2', label: 'VALIDACIÓN DE CORREO' },
          { value: '3', label: 'ALTA' },
          { value: '4', label: 'ALTAS Y PORTABILIDAD' },
          { value: '5', label: 'CONSULTAS' },
          { value: '5', label: 'LOGIN' },
          { value: '6', label: 'BLOQUEO DE EQUIPOS' },
          { value: '7', label: 'BLOQUEO DE LINEA Y EQUIPO' },
          { value: '8', label: 'COMPRA DE PAQUETES' },
          { value: '9', label: 'ACCESO' },
          { value: '10', label: 'ENVÍO DE CORREO' },
          { value: '11', label: 'RECARGAS' },
          { value: '12', label: 'RECAUDACIÓN' },
          { value: '13', label: 'ALTAS' },
          { value: '14', label: 'PORTABILIDAD' },
          { value: '15', label: 'RECARGAS Y RECAUDACIÓN' },
          { value: '16', label: 'USUARIOS PREMIUM' },
          { value: '17', label: 'DESCARGAR' },
          { value: '18', label: 'EVALUACION' },
          { value: '19', label: 'ACTIVACIONES' },
          { value: '20', label: 'VENTAS' },
          { value: '21', label: 'CONSULTA SALDO' },
          { value: '22', label: 'VENTA EXPRESS' },
        ]"
      />
    </div>
    <div class="group-input">
      <SelectForm
        label="Tipo de Transacción"
        v-model="form.tipoTransaccion"
        :options="[
          { value: '1', label: 'AGENDAMIENTO' },
          { value: '1', label: 'REGISTRO DE DATOS' },
          { value: '1', label: 'PREPAGO' },
          { value: '4', label: 'POSTPAGO' },
          { value: '1', label: 'BIOMETRIA POSTPAGO PREPAGO' },
          { value: '4', label: 'POSTPAGO - PREPAGO' },
          { value: '4', label: 'APP CLARO' },
          { value: '4', label: 'APP MICLARO' },
          { value: '4', label: 'CLARO PUNTOS' },
          { value: '4', label: 'VARIOS' },
          { value: '4', label: 'CONSULTA LINEAS POSTPAGO - PREPAGO - FIJA' },
          { value: '4', label: 'CREAR Y ACTUALIZAR CONTRASEÑA UNICA' },
          { value: '3', label: 'GENERACIÓN DE RECLAMOS' },
          { value: '3', label: 'LÍNEAS FIJAS' },
          { value: '3', label: 'INCOGNITO' },
          { value: '3', label: 'INTERCCIONES' },
          { value: '4', label: 'REGISTRO DE VENDEDORES' },
          { value: '3', label: 'MANTENIMIENTO' },
          { value: '4', label: 'NO PERMITE GENERAR SOT' },
          { value: '4', label: 'RECIBOS' },
          { value: '4', label: 'PORT IN' },
          { value: '4', label: 'RECLAMOS' },
          { value: '4', label: 'REGISTRO DE VENDEDORES' },
          { value: '4', label: 'RENOVACIÓN POSTPAGO' },
          { value: '4', label: 'SERVICIOS FIJOS' },
          { value: '4', label: 'VPN' },
          { value: '4', label: 'VALIDACIÓN DE PIN' },
        ]"
      />

      <SelectForm
        label="Plataforma Tecnológica Afectada"
        v-model="form.plataformaAfectada"
        :options="[
          { value: '1', label: 'APLICACIÓN' },
          { value: '2', label: 'PROCESO' },
          { value: '3', label: 'SERVICIO' },
        ]"
      />
    </div>
    <div class="group-input">
      <SelectForm
        label="Torre Impactada"
        v-model="form.torreImpactada"
        :options="[
          { value: '1', label: 'BOSO' },
          { value: '2', label: 'BOSS' },
          { value: '3', label: 'CRM' },
          { value: '4', label: 'EAI' },
          { value: '4', label: 'CBIO' },
        ]"
      />
    </div>
    <div class="group-input">
      <InputForm label="Hora inicio" type="time" v-model="form.fecha" />
      <InputForm label="Hora Fin" type="time" v-model="form.fecha" />
    </div>
  </CapsuleSection>
</template>

<script setup>
import CapsuleSection from '@/modules/control-incidencias/components/base/CapsuleSection.vue'
import SelectForm from '../base/SelectForm.vue'
import InputForm from '../base/InputForm.vue'
import { ref } from 'vue'
const form = ref({
  transaccion: '',
  tipoTransaccion: '',
  plataformaAfectada: '',
  aplicacion: '',
  transaccionAfectada: '',
  torreImpactada: '',
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
</style>
