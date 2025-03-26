<template>
  <div class="layout">
    <!-- Menú lateral -->
    <SidebarMenu class="layout-sidebar" />

    <!-- Contenido dinámico -->
    <GoogleSoap class="layout-content" />
  </div>
</template>

<script setup>
import SidebarMenu from '@/components/SideBarMenu.vue'
import GoogleSoap from '../modules/google-soap/pages/GoogleSoap.vue'
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

/* Sidebar fijo */
.layout-sidebar {
  width: 220px;
  background-color: #171215;
  color: white;
  transition: width 0.3s ease-in-out;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

/* Contenido dinámico */
.layout-content {
  flex-grow: 1; /* Ocupará todo el espacio restante */
  padding-block: 1.5rem;
  padding-inline: 2.5rem;
  background: #f8f9fa;
  overflow: auto; /*Permite scroll interno si el contenido es muy grande*/
  max-height: 100vh; /*Limita la altura al 100% del viewport*/
}
</style>
