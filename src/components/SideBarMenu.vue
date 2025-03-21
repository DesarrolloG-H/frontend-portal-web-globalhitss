<template>
  <div class="sidebar" :class="{ active: isSidebarActive }">
    <div class="logo-content">
      <div class="logo">
        <i class="bx bxl-google"></i>
        <h2 class="logo-name">Globalhitss</h2>
      </div>
      <i @click="toggleSidebar" class="bx bx-menu" id="btn-menu"></i>
    </div>
    <ul class="nav-content">
      <li class="nav-list">
        <a class="item" href="#">
          <i class="bx bx-grid-alt"></i>
          <span class="links-name">Dashboard</span>
        </a>
        <span class="tooltip">Dashboard</span>
      </li>
      <li class="nav-list">
        <a class="item" href="#">
          <i class="bx bx-file-find"></i>
          <span class="links-name">Operativas</span>
        </a>
        <span class="tooltip">Operativas</span>
      </li>
      <li class="nav-list">
        <a class="item" href="#">
          <i class="bx bxs-comment-error"></i>
          <span class="links-name">Incidencias</span>
        </a>
        <span class="tooltip">Incidencias</span>
      </li>
    </ul>
    <div class="profile-content">
      <div class="profile">
        <div class="profile-details">
          <img src="" alt="" />
          <div class="name-job">
            <div class="name">Jean Pool</div>
            <div class="job">GCME</div>
          </div>
        </div>
        <i class="bx bx-log-out" id="logout"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

// Estado reactivo del sidebar
const isSidebarActive = ref(false)
const emit = defineEmits(['update:active'])

const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value
  emit('update:active', isSidebarActive.value)
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 78px;
  padding: 0.5rem 1rem;
  transition: all 0.5s ease;
}

.sidebar.active {
  width: 250px;
}

.sidebar .logo-content .logo {
  color: #fff;
  display: flex;
  align-items: center;
  height: 3.125rem;
  width: 100%;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease;
}

.sidebar.active .logo-content .logo {
  opacity: 1;
  pointer-events: none;
}

.logo-content .logo i {
  font-size: 2rem;
  margin-inline-end: 0.5rem;
}

.logo-content .logo .logo-name {
  font-size: 1.25rem;
  font-weight: 400;
}

.sidebar #btn-menu {
  position: absolute;
  color: #fff;
  cursor: pointer;
  top: 0.5rem;
  left: 45%;
  font-size: 1.5rem;
  block-size: 3.125rem;
  inline-size: 3.125rem;
  text-align: center;
  line-height: 3.125rem;
  transform: translateX(-50%);
}

.sidebar.active #btn-menu {
  left: 90%;
}
.sidebar ul {
  margin-top: 1.5rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar ul li {
  position: relative;
  margin: 0 0.5rem;
  list-style: none;
  line-height: 1.25rem;
}

.sidebar ul li a {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 1rem;
  block-size: 50px;
  inline-size: 50px;
  white-space: nowrap;
}

.sidebar.active ul li a {
  block-size: 100%;
  inline-size: 100%;
}

.sidebar ul li a:hover {
  background-color: #fff;
  color: #000;
}

.sidebar ul li a i {
  block-size: 3.125rem;
  min-inline-size: 3.125rem;
  border-radius: 1rem;
  line-height: 3.125rem;
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar .links-name {
  opacity: 0;
  pointer-events: none;
}

.sidebar.active .links-name {
  opacity: 1;
  pointer-events: auto;
}

.sidebar .profile-content {
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  inline-size: 100%;
}
.sidebar .profile-content .profile {
  position: relative;
  padding: 10px 6px;
  height: 60px;
  transition: all 0.4s ease;
  background-color: transparent;
}

.sidebar.active .profile-content .profile {
  background-color: #1d1e27;
}

.profile-content .profile .profile-details {
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
}

.sidebar.active .profile .profile-details {
  opacity: 1;
  pointer-events: auto;
}

.profile .profile-details img {
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 1rem;
}
.profile .profile-details .name-job {
  margin-inline-start: 0.8rem;
}

.profile .profile-details .name-job .name {
  font-size: 1rem;
  font-weight: 400;
}

.profile .profile-details .name-job .job {
  font-size: 0.8rem;
  font-weight: 300;
}

.profile #logout {
  position: absolute;
  top: 40%;
  right: 15%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  line-height: 50px;
  border-radius: 1rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.4s ease;
  margin-inline-end: 1rem;
  background-color: #1d1e27;
}

.sidebar.active #logout {
  right: 0;
  background-color: transparent;
}

.sidebar ul li .tooltip {
  position: absolute;
  left: 90px;
  top: 0;
  transform: translateY(-50%);
  border-radius: 6px;
  text-align: center;
  line-height: 35px;
  height: 35px;
  width: 90px;
  color: #000;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: block;
}

.sidebar.active ul li .tooltip {
  display: none;
}

.sidebar ul li:hover .tooltip {
  transition: all 0.5s ease;
  opacity: 1;
  top: 50%;
}
</style>
