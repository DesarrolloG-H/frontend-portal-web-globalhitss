<template>
  <div class="sidebar" :class="{ active: isSidebarActive }">
    <div class="logo-content" @click="toggleSidebar">
      <div class="logo">
        <img src="../assets/logo-hitss.png" alt="" height="50" width="50" />
        <h1 class="logo-name">Globalhitss</h1>
      </div>
    </div>
    <ul class="nav-content">
      <!-- <li class="nav-list">
        <a class="item" href="#">
          <i class="bx bx-grid-alt"></i>
          <span class="links-name">Dashboard</span>
        </a>
        <span class="tooltip">Dashboard</span>
      </li> -->
      <li class="nav-list">
        <router-link class="item" to="/SoapSearch">
          <i class="bx bx-file-find"></i>
          <span class="links-name">Operativas</span>
        </router-link>
        <span class="tooltip">Operativas</span>
      </li>
      <!-- <li class="nav-list">
        <a class="item" href="#">
          <i class="bx bxs-comment-error"></i>
          <span class="links-name">Incidencias</span>
        </a>
        <span class="tooltip">Incidencias</span>
      </li> -->
    </ul>
    <div class="profile-content">
      <div class="profile">
        <div class="profile-details">
          <i class="bx bxs-user"></i>
          <div class="name-job">
            <div class="name">Analista</div>
            <div class="job">Soap</div>
          </div>
        </div>
        <i class="bx bx-log-out" id="logout"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

// Estado reactivo del sidebar
const isSidebarActive = ref(false)

// Función para actualizar el estado según el tamaño de la pantalla
const updateSidebarState = () => {
  isSidebarActive.value = window.innerWidth < 1240
}

// Detectar cambios en el tamaño de la pantalla automáticamente
watchEffect(() => {
  updateSidebarState()
})

// Agregar y remover event listeners cuando el componente se monta/desmonta
onMounted(() => {
  window.addEventListener('resize', updateSidebarState)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSidebarState)
})

// Alternar manualmente el sidebar con un clic
const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
}
</script>

<style scoped>
.sidebar {
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar.active {
  inline-size: 50px;
  transition: all 0.5s ease;
}

/* LOGO STYLES */
.logo-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-start: 1rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.sidebar.active .logo-content {
  justify-content: center;
  transition: all 0.5s ease;
  padding: 0;
}

.logo-content .logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 1;
  pointer-events: none;
}

.sidebar.active .logo-content .logo .logo-name {
  display: none;
  pointer-events: none;
}

.logo-content .logo i {
  font-size: 2.5rem;
}

.logo .logo-name {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  color: #000;
}

.logo-content #btn-menu {
  font-size: 1.5rem;
  cursor: pointer;
  color: #000;
}

.sidebar.active .logo-content #btn-menu {
  font-size: 2rem;
}

/* NAV STYLES */
.nav-content {
  margin-block-start: 2rem;
  flex: 1;
  padding-inline: 0rem;
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;
  gap: 1rem;
}

.nav-content .nav-list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar .nav-content .nav-list .tooltip {
  position: absolute;
  left: 90px;
  border-radius: 6px;
  line-height: 35px;
  text-align: center;
  font-weight: 400;
  font-size: 0.9rem;
  height: 35px;
  width: 90px;
  color: #000;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  transition: 0.7s;
  display: block;
  opacity: 0;
  z-index: 9999;
}

.sidebar.active .nav-content .nav-list:hover .tooltip {
  opacity: 1;
  transition: 0.7s;
}

.nav-content .nav-list .item {
  text-decoration: none;
  padding-block: 0.4rem;
  border-radius: 1rem;
  color: #fff;
  display: flex;
  align-items: center;

  gap: 1rem;
  flex: 1;
  padding-inline-start: 1rem;
  transition: all 0.4s ease;
  white-space: nowrap;
}

.sidebar.active .nav-content .nav-list .item {
  padding: 0.5rem;
  justify-content: center;
}

.nav-content .nav-list .item:hover {
  background-color: #fff;
  color: #000;
}

.nav-content .nav-list .item i {
  font-size: 1.5rem;
}

.nav-content .nav-list .item .links-name {
  font-size: 1.2rem;
  font-weight: 300;
}

.sidebar.active .nav-list .item .links-name {
  display: none;
}

.sidebar.active .nav-content .nav-list .item i {
  font-size: 2rem;
}

/* PROFILE STYLES */

.profile-content .profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar.active .profile-content .profile {
  justify-content: center;
}

.profile-content .profile .profile-details {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sidebar.active .profile-content .profile .profile-details {
  display: none;
}

.profile-content .profile .profile-details i {
  width: 45px;
  height: 45px;
  /* object-fit: cover; */
  border-radius: 1rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
}
.profile-content .profile .profile-details .name-job .name {
  font-size: 1rem;
  font-weight: 400;
}

.profile-content .profile .profile-details .name-job .job {
  font-size: 0.8rem;
  font-weight: 300;
}

.profile-content .profile #logout {
  font-size: 1.5rem;
  cursor: pointer;
}

.sidebar.active .profile-content .profile #logout {
  font-size: 2rem;
}
</style>
