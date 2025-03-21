<template>
  <div class="sidebar" :class="{ active: isSidebarActive }">
    <div class="logo-content">
      <div class="logo">
        <i class="bx bxl-ok-ru"></i>
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
import { ref } from 'vue'

// Estado reactivo del sidebar
const isSidebarActive = ref(false)
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
}

.sidebar.active .logo-content {
  justify-content: center;
  transition: all 0.5s ease;
}

.logo-content .logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 1;
  pointer-events: none;
}

.sidebar.active .logo-content .logo {
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
}

.logo-content #btn-menu {
  font-size: 1.5rem;
  cursor: pointer;
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
  font-size: 1.3rem;
}

.nav-content .nav-list .item .links-name {
  font-size: 1rem;
  font-weight: 300;
}

.sidebar.active .nav-list .item .links-name {
  display: none;
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

.profile-content .profile .profile-details img {
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 1rem;
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
</style>
