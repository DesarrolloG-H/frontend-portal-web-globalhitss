<template>
  <div class="container">
    <div class="content-logo">
      <h2 class="logo">Globalhitss</h2>
    </div>
    <hr />
    <nav class="menu">
      <ul>
        <li>
          <a href="#"><font-awesome-icon icon="home" />Dashboard</a>
        </li>
        <li>
          <a href="#"><font-awesome-icon icon="file-alt" />Operativas</a>
        </li>
        <li>
          <a href="#"><font-awesome-icon icon="chart-bar" />Incidencias</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.content-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.content-logo h2 {
  margin: 1.5rem;
}

.menu {
  margin-block-start: 2rem;
  padding-inline: 2rem;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  gap: 1rem;
  padding: 0;
  margin: 0;
}

hr {
  border: 1px solid rgb(152, 150, 150);
  inline-size: 60%;
  margin: auto;
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-weight: 300;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

a:hover {
  background-color: #3248f2;
}
</style>
