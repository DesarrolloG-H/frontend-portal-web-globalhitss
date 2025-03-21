<template>
  <div class="layout">
    <!-- Menú lateral -->
    <SidebarMenu class="layout-sidebar" />

    <!-- Contenido dinámico -->
    <main class="layout-content">
      <p>hello world</p>
    </main>
  </div>
</template>

<script setup>
import SidebarMenu from '@/components/SideBarMenu.vue'
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
  padding: 20px;
  background: #f8f9fa;
}
</style>
