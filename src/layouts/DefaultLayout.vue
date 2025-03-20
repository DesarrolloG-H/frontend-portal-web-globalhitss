<template>
  <div class="layout">
    <!-- Menú lateral -->
    <SidebarMenu class="sidebar" />

    <!-- Contenido dinámico -->
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import SidebarMenu from '@/components/SideBarMenu.vue'
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 250px 1fr; /* Sidebar fijo en 250px y el resto ocupa el espacio disponible */
  grid-template-rows: 100vh; /* Toda la altura de la pantalla */
  height: 100vh; /* Asegurar que ocupa toda la pantalla */
}

/* Sidebar fijo */
.sidebar {
  background-color: #171215;
  color: white;
}

/* Contenido dinámico */
.content {
  padding: 20px;
  /* overflow-y: auto; */
  background: #f8f9fa; /* Un color de fondo suave para diferenciar */
  border: 5px solid red;
}
</style>
